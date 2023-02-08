import { TTokens } from "@/typings";
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
}

const PayModal: FC<IProps> = ({ isOpen, onClose }) => {
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
          <PayButton method={activeMethod} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { PayModal };
