import { TTokens } from "@/typings";
import { generateTxn } from "@/utils/sendTxn";
import { Button } from "@chakra-ui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";

interface IProps {
  method: TTokens;
}

const PayButton: FC<IProps> = ({ method }) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const txn = await generateTxn(
        method,
        publicKey?.toString()!,
        1,
        publicKey!
      );

      const signature = await sendTransaction(txn!, connection);

      return signature;
    },
  });

  return (
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
    >
      Pay with CandyPay
    </Button>
  );
};

export { PayButton };
