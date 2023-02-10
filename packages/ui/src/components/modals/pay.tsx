import { IIntent, TTokens } from "@/typings";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { PayButton } from "../buttons/pay";
import { Methods } from "../elements/methods";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  intentData: IIntent;
  onSuccess?: Function;
  onError?: Function;
  metadata: any;
}

const PayModal: FC<IProps> = ({
  isOpen,
  onClose,
  intentData,
  onError,
  onSuccess,
  metadata,
}) => {
  const [activeMethod, setActiveMethod] = useState<TTokens>("sol");

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
            amount={metadata?.amount!}
            intentData={intentData}
            merchant={metadata?.merchant}
            onClose={onClose}
            {...{
              onSuccess,
              onError,
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { PayModal };
