import { CheckoutContext } from "@/providers/Checkout";
import { IIntent, TTokens } from "@/typings";
import { getIntent } from "@/utils/getIntent";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FC, useContext, useState } from "react";
import { PayButton } from "../buttons/pay";
import { Methods } from "../elements/methods";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  intentData: IIntent;
}

const PayModal: FC<IProps> = ({ isOpen, onClose, intentData }) => {
  const [activeMethod, setActiveMethod] = useState<TTokens>("sol");
  const { publicApiKey } = useContext(CheckoutContext);

  const { data } = useQuery(
    ["getIntent"],
    async () => {
      return await getIntent(publicApiKey, intentData.sessionId);
    },
    {
      enabled: !!publicApiKey && !!intentData.sessionId,
    }
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalBody
          display="flex"
          flexDirection="column"
          gap="4"
          alignItems="center"
          mb="4"
          mt="2"
        >
          <Methods
            activeMethod={activeMethod}
            setActiveMethod={setActiveMethod}
          />
          <PayButton
            method={activeMethod}
            amount={data?.session?.amount!}
            intentData={intentData}
            merchant={data?.session?.merchant}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { PayModal };
