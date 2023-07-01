import { ClientWalletProvider } from "@/providers/wallet";
import { IIntent, IProps } from "@/typings";
import { fetchTokenPrices } from "@/utils/fetchTokenPrices";
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

  const { network } = useContext(CheckoutContext);

  const [user, setUser] = useState<any>(null);

  const { mutate, isLoading } = useMutation(
    ["generateIntent"],
    async () => {
      const res = await intentHandler();
      setMetadata(res.metadata as SessionMetadataResponse);
      setAvatar((res.user as any).avatar);
      setUser(res.user);

      const tokens = ["sol", "usdc", ...(res.metadata as any).tokens.tokens];
      const prices = await fetchTokenPrices(tokens);

      setPrices(prices);
      setIntentData({
        intentSecret: res.intent_secret_key,
        intentId: res.intent_id,
      });
    },
    {
      onSuccess: () => {
        onOpen();
      },
    }
  );

  return (
    <ClientWalletProvider network={network}>
      <PayModal
        isOpen={isOpen}
        onClose={onClose}
        intentData={intentData}
        {...{ onSuccess, onError, metadata, prices, avatar, user }}
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
