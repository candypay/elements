import { IModalProps, TTokens } from "@/typings";
import { resolveAmount } from "@/utils/resolveAmount";
import {
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Badge } from "@supabase/ui";
import { FC, useContext, useMemo, useState } from "react";
import { CheckoutContext } from "../../providers/checkout";
import { PayButton } from "../buttons/pay";
import { Methods } from "../elements/methods";

export const PayModal: FC<IModalProps> = ({
  isOpen,
  onClose,
  intentData,
  onError,
  onSuccess,
  metadata,
  avatar,
  prices,
  theme,
  user
}) => {
  const [activeMethod, setActiveMethod] = useState<TTokens>("sol");
  const { network } = useContext(CheckoutContext);

  const methods = useMemo(() => {
    const defaultMethods = ["sol", "usdc"] as TTokens[];

    if (!metadata.tokens || network === "devnet") {
      return defaultMethods;
    }

    return [...defaultMethods, ...metadata.tokens.tokens!] as TTokens[];
  }, [metadata.tokens, network]);

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

          {metadata.network === "devnet" && (
            <Badge color="purple">{metadata.network}</Badge>
          )}
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody
          display="flex"
          flexDirection="column"
          gap="4"
          alignItems="center"
          mb="1"
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
              user,
            }}
          />

          <Link isExternal href="https://candypay.fun">
            <Flex
              gap="1"
              justifyContent="center"
              color="#CBD5E1"
              fontSize="md"
              fontWeight="500"
              alignItems="center"
            >
              Powered by{" "}
              <Image src="https://res.cloudinary.com/ddum5vpp3/image/upload/v1688122194/logo-gray_yvausp.svg" alt="logo" />{" "}
              <Text as="span" fontSize="lg">
                CandyPay
              </Text>
            </Flex>
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
