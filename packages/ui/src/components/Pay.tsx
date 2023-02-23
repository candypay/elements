import { ClientWalletProvider } from "@/providers/Wallet";
import { IIntent, IProps } from "@/typings";
import { getIntent } from "@/utils/getIntent";
import { PricesEntity, SessionMetadataResponse } from "@candypay/checkout-sdk";
import { useDisclosure } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { FC, useContext, useState } from "react";
import { CheckoutContext } from "..";
import { Renderer } from "./misc/renderer";
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
  const [intentData, setIntentData] = useState<IIntent>({
    intentSecret: "",
    intentId: "",
  } as IIntent);
  const [metadata, setMetadata] = useState<SessionMetadataResponse>(
    {} as SessionMetadataResponse
  );
  const [prices, setPrices] = useState<PricesEntity[]>([] as PricesEntity[]);
  const [avatar, setAvatar] = useState<string>("");
  const { publicApiKey } = useContext(CheckoutContext);

  const { mutate, isLoading } = useMutation(
    ["generateIntent"],
    async () => {
      const res = await intentHandler();
      setMetadata(res.metadata as SessionMetadataResponse);
      setIntentData({
        intentSecret: res.intent_secret_key,
        intentId: res.intent_id,
      });

      const response = await getIntent(publicApiKey, res.intent_id);
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
    <ClientWalletProvider>
      <PayModal
        isOpen={isOpen}
        onClose={onClose}
        intentData={intentData}
        {...{ onSuccess, onError, metadata, prices, avatar }}
        theme={theme!}
      />
      <Renderer
        {...{ isLoading, mutate }}
        value={value!}
        theme={theme!}
        className={className!}
      />
    </ClientWalletProvider>
  );
};

export { PayElement };
