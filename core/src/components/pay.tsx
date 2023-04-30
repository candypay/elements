import { FC, useState } from "react";
import { Button } from "./ui/button";

import { generateTxn, resolveAmount, updateTxn } from "./lib/utils";
import { PayButtonProps } from "./typings";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Loader2 } from "lucide-react";

const PayButton: FC<PayButtonProps> = ({
  activeMethod,
  prices,
  intentData,
  onSuccess,
  onClose,
}) => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);

  const amountInUsdc = (intentData.metadata as any).amount;
  const merchant = (intentData.metadata as any).merchant;

  const handleClick = async () => {
    try {
      setLoading(true);
      if (!publicKey) return;

      const transaction = await generateTxn(
        activeMethod,
        merchant,
        amountInUsdc,
        publicKey
      );

      const signature = await sendTransaction(transaction, connection, {
        skipPreflight: true,
      });

      await updateTxn(
        intentData.intent_id,
        signature,
        intentData.intent_secret_key
      );

      console.log("Transaction sent:", signature);
      onSuccess && onSuccess(signature);
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="brand" onClick={handleClick} className="w-full">
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        `Pay ${resolveAmount(activeMethod, prices, amountInUsdc)} ${" "}
        ${activeMethod.toUpperCase()}`
      )}
    </Button>
  );
};

export { PayButton };
