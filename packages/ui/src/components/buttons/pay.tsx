import { useTheme } from "@/lib/hooks/useTheme";
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
  onSuccess?: any;
  onError?: any;
  amountToShow: number;
}

const PayButton: FC<IProps> = ({
  method,
  amount,
  intentData,
  merchant,
  onClose,
  onSuccess,
  onError,
  amountToShow,
}) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const { colors } = useTheme();

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
        onSuccess && onSuccess(data);
        onClose();
      }
    },
    onError: (error) => {
      onError && onError(error);
    },
  });

  return (
    <>
      {amountToShow ? (
        <Button
          px="16"
          w="full"
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
          isDisabled={!amount}
        >
          Pay {amountToShow} {method.toUpperCase()}
        </Button>
      ) : (
        <Skeleton w="full" h="10" rounded="md" />
      )}
    </>
  );
};

export { PayButton };
