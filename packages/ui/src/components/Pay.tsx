import { IIntent, IProps } from "@/typings";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { FC, useState } from "react";
import { ConnectWallet } from "./buttons/wallet";
import { PayModal } from "./modals/pay";

const PayElement: FC<IProps> = ({ intentHandler }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { publicKey } = useWallet();
  const [intentData, setIntentData] = useState<IIntent>({
    intentSecret: "",
    sessionId: "",
  } as IIntent);

  const { mutate, isLoading } = useMutation(
    ["generateIntent"],
    async () => {
      const res = await intentHandler();
      setIntentData({
        intentSecret: res.intent_secret_key,
        sessionId: res.session_id,
      });
    },
    {
      onSuccess: () => {
        onOpen();
      },
    }
  );

  return (
    <>
      <PayModal isOpen={isOpen} onClose={onClose} intentData={intentData} />
      {publicKey ? (
        <Button
          px="16"
          rounded="md"
          fontWeight="medium"
          h="10"
          bgColor="#8B55FF"
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
