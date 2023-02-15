import { IModalProps, TTokens } from "@/typings";
import { resolveAmount } from "@/utils/resolveAmount";
import {
  Image,
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

const PayModal: FC<IModalProps> = ({
  isOpen,
  onClose,
  intentData,
  onError,
  onSuccess,
  metadata,
  avatar,
  prices,
  theme,
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
        <ModalHeader display="flex" alignItems="center" gap="2">
          <Image src={avatar} alt="avatar" h="8" w="8" rounded="sm" />
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
            theme={theme}
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
              theme,
            }}
          />

          <Text fontWeight="medium" color="gray.500">
            Powered by{" "}
            <Text as="span" color="gray.700">
              CandyPay
            </Text>
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { PayModal };
