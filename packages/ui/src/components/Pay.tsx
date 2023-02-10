import { useTheme } from "@/lib/hooks/useTheme";
import { IIntent, IProps } from "@/typings";
import { getIntent } from "@/utils/getIntent";
import { PricesEntity, SessionMetadataResponse } from "@candypay/checkout-sdk";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { FC, useContext, useEffect, useState } from "react";
import { CheckoutContext } from "..";
import { ConnectWallet } from "./buttons/wallet";
import { PayModal } from "./modals/pay";

const PayElement: FC<IProps> = ({
  intentHandler,
  onError,
  onSuccess,
  theme,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { publicKey } = useWallet();
  const [intentData, setIntentData] = useState<IIntent>({
    intentSecret: "",
    sessionId: "",
  } as IIntent);
  const { colors, setColors } = useTheme();
  const [metadata, setMetadata] = useState<SessionMetadataResponse>(
    {} as SessionMetadataResponse
  );
  const [prices, setPrices] = useState<PricesEntity[]>([] as PricesEntity[]);
  const { publicApiKey } = useContext(CheckoutContext);

  useEffect(() => {
    if (theme?.primaryColor) {
      setColors({
        ...colors,
        primary: theme?.primaryColor,
      });
    }
    if (theme?.secondaryColor) {
      setColors({
        ...colors,
        secondary: theme?.secondaryColor,
      });
    }
  }, [colors, setColors, theme]);

  const { mutate, isLoading } = useMutation(
    ["generateIntent"],
    async () => {
      const res = await intentHandler();
      setMetadata(res.metadata as SessionMetadataResponse);
      setIntentData({
        intentSecret: res.intent_secret_key,
        sessionId: res.session_id,
      });

      const response = await getIntent(publicApiKey, res.session_id);
      setPrices(response.prices);
    },
    {
      onSuccess: () => {
        onOpen();
      },
    }
  );

  return (
    <>
      <PayModal
        isOpen={isOpen}
        onClose={onClose}
        intentData={intentData}
        {...{ onSuccess, onError, metadata, prices }}
      />
      {publicKey ? (
        <Button
          px="16"
          rounded="md"
          fontWeight="medium"
          h="10"
          bgColor={colors.primary}
          color="white"
          _hover={{ bgColor: "#7C4DFF" }}
          _active={{ bgColor: "#6B45FF" }}
          transition="all 0.2s ease-in-out"
          onClick={() => mutate()}
          isLoading={isLoading}
        >
          Pay with CandyPay
        </Button>
      ) : (
        <ConnectWallet />
      )}
    </>
  );
};

export { PayElement };
