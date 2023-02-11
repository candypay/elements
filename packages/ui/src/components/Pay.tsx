import { useTheme } from "@/lib/hooks/useTheme";
import { IIntent, IProps } from "@/typings";
import { getIntent } from "@/utils/getIntent";
import { PricesEntity, SessionMetadataResponse } from "@candypay/checkout-sdk";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { FC, useContext, useState } from "react";
import { CheckoutContext } from "..";
import { ConnectWallet } from "./buttons/wallet";
import { PayModal } from "./modals/pay";

const PayElement: FC<IProps> = ({
  intentHandler,
  onError,
  onSuccess,
  theme,
  value,
  className,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { publicKey } = useWallet();
  const [intentData, setIntentData] = useState<IIntent>({
    intentSecret: "",
    sessionId: "",
  } as IIntent);
  const [metadata, setMetadata] = useState<SessionMetadataResponse>(
    {} as SessionMetadataResponse
  );
  const [prices, setPrices] = useState<PricesEntity[]>([] as PricesEntity[]);
  const [avatar, setAvatar] = useState<string>("");
  const { publicApiKey } = useContext(CheckoutContext);
  const cols = useTheme(theme!);

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
      setAvatar(response.merchant.avatar);
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
        {...{ onSuccess, onError, metadata, prices, avatar }}
        theme={theme!}
      />
      {publicKey ? (
        <Button
          px="16"
          rounded="md"
          fontWeight="medium"
          h="10"
          bgColor={cols.primary}
          color={cols.secondary}
          _hover={{ bgColor: "#7C4DFF" }}
          _active={{ bgColor: "#6B45FF" }}
          transition="all 0.2s ease-in-out"
          onClick={() => mutate()}
          isLoading={isLoading}
          className={className}
        >
          {value || "Pay with CandyPay"}
        </Button>
      ) : (
        <ConnectWallet theme={theme!} />
      )}
    </>
  );
};

export { PayElement };
