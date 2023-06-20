import { CheckoutContext } from "../../providers/checkout";
import { useConnection } from "@/lib/hooks/useConnection";
import { useTheme } from "@/lib/hooks/useTheme";
import { IPay, ISuccessResponse } from "@/typings";
import { generateTxn } from "@/utils/sendTxn";
import { updateTxn } from "@/utils/updateTxn";
import { Button, Skeleton } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { FC, useContext } from "react";

const PayButton: FC<IPay> = ({
  method,
  amount,
  intentData,
  merchant,
  onClose,
  onSuccess,
  onError,
  amountToShow,
  theme,
}) => {
  const { publicKey, sendTransaction } = useWallet();
  const { network } = useContext(CheckoutContext);

  const connection = useConnection(network);
  const cols = useTheme(theme!);

  const { mutate, isLoading } = useMutation({
    mutationFn: async (): Promise<
      ISuccessResponse & {
        error: boolean;
      }
    > => {
      const txn = await generateTxn(
        method,
        merchant,
        amount,
        publicKey!,
        network,
        amountToShow
      );

      const signature = await sendTransaction(txn!, connection);
      const timestamp = new Date().toISOString();
      const res = await updateTxn(
        intentData.intentId,
        signature,
        intentData.intentSecret
      );

      return {
        signature,
        customer: publicKey?.toString()!,
        error: res.error,
        amount,
        timestamp: new Date(timestamp).getTime(),
      };
    },
    onSuccess: (data) => {
      if (!data.error) {
        onSuccess &&
          onSuccess({
            signature: data.signature,
            customer: data.customer,
            amount: data.amount,
            timestamp: data.timestamp,
          });
        onClose();
      }
    },
    onError: (error) => {
      onError && onError(error);
    },
  });

  return amountToShow ? (
    <Button
      px="16"
      w="full"
      rounded="md"
      fontWeight="medium"
      h="10"
      bgColor={cols.primary}
      color={cols.secondary}
      _hover={{ bgColor: !cols.primary ? "#7C4DFF" : "auto" }}
      _active={{ bgColor: !cols.primary ? "#6B45FF" : "auto" }}
      transition="all 0.2s ease-in-out"
      onClick={() => mutate()}
      isLoading={isLoading}
      isDisabled={!amount}
    >
      Pay {amountToShow} {method.toUpperCase()}
    </Button>
  ) : (
    <Skeleton w="full" h="10" rounded="md" />
  );
};

export { PayButton };
