import { IIntent, TTokens } from "@/typings";
import { resolveAmount } from "@/utils/resolveAmount";
import { PricesEntity, SessionMetadataResponse } from "@candypay/checkout-sdk";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";
import { PayButton } from "../buttons/pay";
import { Methods } from "../elements/methods";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  intentData: IIntent;
  onSuccess?: Function;
  onError?: Function;
  metadata: SessionMetadataResponse;
  prices: PricesEntity[];
}

const PayModal: FC<IProps> = ({
  isOpen,
  onClose,
  intentData,
  onError,
  onSuccess,
  metadata,
  prices,
}) => {
  const [activeMethod, setActiveMethod] = useState<TTokens>("sol");

  const methods = useMemo(() => {
    const defaultMethods = ["sol", "usdc"] as TTokens[];

    if (!metadata.tokens) {
      return defaultMethods;
    }

    return [...defaultMethods, ...metadata.tokens.tokens!] as TTokens[];
  }, [metadata.tokens]);

  const amountToShow = useMemo(() => {
    return resolveAmount(activeMethod, prices, metadata.amount);
  }, [metadata.amount, activeMethod, prices]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="bold" fontSize="lg">
            Pay ${metadata?.amount}
          </Text>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody
          display="flex"
          flexDirection="column"
          gap="4"
          alignItems="center"
          mb="4"
        >
          <Methods
            activeMethod={activeMethod}
            setActiveMethod={setActiveMethod}
            methods={methods!}
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
              amountToShow,
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { PayModal };
