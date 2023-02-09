import { IIntent, TTokens } from "@/typings";
import { generateTxn } from "@/utils/sendTxn";
import { updateTxn } from "@/utils/updateTxn";
import { Button, Skeleton } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";

interface IProps {
  method: TTokens;
  amount: number;
  intentData: IIntent;
  merchant: string;
  onClose: () => void;
}

const PayButton: FC<IProps> = ({
  method,
  amount,
  intentData,
  merchant,
  onClose,
}) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const txn = await generateTxn(method, merchant, amount, publicKey!);

      const signature = await sendTransaction(txn!, connection);
      const res = await updateTxn(
        intentData.sessionId,
        signature,
        intentData.intentSecret
      );

      return res;
    },
    onSuccess: (data) => {
      if (!data.error) {
        console.log("success");
        onClose();
      }
    },
    onError: (error) => {},
  });

  return (
    <>
      {amount ? (
        <Button
          px="16"
          w="full"
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
          isDisabled={!amount}
        >
          Pay with CandyPay
        </Button>
      ) : (
        <Skeleton w="full" h="10" rounded="md" />
      )}
    </>
  );
};

export { PayButton };
