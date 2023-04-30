import { FC, useState } from "react";
import { Button } from "./ui/button";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

import { useWallet } from "@solana/wallet-adapter-react";
import { MAINNET_TOKENS, MainnetTokens } from "@candypay/common";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Tokens } from "./typings";

const MethodSelector: FC<{
  method: Tokens;
}> = ({ method }) => {
  return (
    <div className="border-[3px] rounded-md h-[4.5rem] w-24 cursor-pointer text-sm flex flex-col items-start gap-2 justify-center px-2 text-[#94A3B8] font-medium hover:bg-neutral-50 transition-colors duration-100">
      <img
        src={MAINNET_TOKENS[method.toUpperCase() as MainnetTokens].image}
        alt={method}
        className="h-5 w-5 rounded-full"
      />
      {method.toUpperCase()}
    </div>
  );
};

const PayElement: FC = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const { publicKey, connected, connecting } = useWallet();
  const { setVisible } = useWalletModal();

  const METHODS: Tokens[] = ["sol", "samo", "usdc", "dust"];

  return (
    <>
      <Dialog open={open}>
        <DialogOverlay onClick={onClose} />
        <DialogContent
          className="font-sans"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onClose();
            }
          }}
          onClose={onClose}
        >
          <DialogHeader>
            <DialogTitle>Pay $1 to Anurag</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-neutral-500">Choose a Token</p>
            <div className="flex justify-between">
              {METHODS.map((method) => (
                <MethodSelector key={method} method={method} />
              ))}
            </div>

            <Button
              variant="brand"
              onClick={() => {
                setOpen(true);
              }}
              className="w-full"
            >
              Pay $1 USDC
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {publicKey ? (
        <Button
          variant="brand"
          onClick={() => {
            setOpen(true);
          }}
        >
          Pay with CandyPay
        </Button>
      ) : (
        <Button
          variant="brand"
          onClick={() => {
            !connected && setVisible(true);
          }}
        >
          {connecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </>
  );
};

export { PayElement };
