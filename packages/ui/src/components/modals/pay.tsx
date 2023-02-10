import { CheckoutContext } from "@/providers/Checkout";
import { IIntent, TTokens } from "@/typings";
import { getIntent } from "@/utils/getIntent";
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
import { useQuery } from "@tanstack/react-query";
import { FC, useContext, useMemo, useState } from "react";
import { PayButton } from "../buttons/pay";
import { Methods } from "../elements/methods";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  intentData: IIntent;
  onSuccess?: Function;
  onError?: Function;
  metadata: SessionMetadataResponse;
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
  const { publicApiKey } = useContext(CheckoutContext);
  console.log(intentData);

  const { data } = useQuery(
    ["intentMetadata"],
    async () => {
      return await getIntent(publicApiKey, intentData.sessionId);
    },
    {
      enabled: !!publicApiKey && !!intentData.sessionId,
    }
  );

  const methods = useMemo(() => {
    const defaultMethods = ["sol", "usdc"] as TTokens[];

    if (!metadata.tokens) {
      return defaultMethods;
    }

    return [...defaultMethods, ...metadata.tokens.tokens!] as TTokens[];
  }, [metadata.tokens]);

  const amountToShow = useMemo(() => {
    if (activeMethod === "usdc") {
      return metadata.amount;
    }
    const amount = data?.prices.find(
      (price: PricesEntity) => price.token === activeMethod
    )?.price;

    if (Number((metadata.amount / amount!).toFixed(3)) === 0.0) {
      return 0.001;
    } else {
      return Number((metadata.amount / amount!).toFixed(3));
    }
  }, [metadata.amount, activeMethod, data]);

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
          <Text fontWeight="medium" fontSize="lg">
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
