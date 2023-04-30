import { DialogOverlay } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import { FC, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

import { CreateIntentResponse, PricesEntity } from "@candypay/checkout-sdk";
import { MAINNET_TOKENS, MainnetTokens } from "@candypay/common";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { cn, fetchTokenPrices } from "./lib/utils";
import { PayButton } from "./pay";
import { PayElementProps, Tokens } from "./typings";

const PayElement: FC<PayElementProps> = ({ intentHandler, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    setIntentData(undefined);
    setMethod("sol");
  };

  const { publicKey, connected, connecting } = useWallet();
  const { setVisible } = useWalletModal();

  const [loading, setLoading] = useState(false);
  const [activeMethod, setMethod] = useState<Tokens>("sol");
  const [intentData, setIntentData] = useState<CreateIntentResponse>();
  const [prices, setPrices] = useState<PricesEntity[]>([]);

  const tokens = useMemo(() => {
    if (!intentData) return ["sol", "usdc"] as Tokens[];
    const tokens = [
      "sol",
      "usdc",
      ...(intentData?.metadata as any).tokens.tokens,
    ] as Tokens[];
    return tokens;
  }, [intentData]);

  const handleClick = async () => {
    try {
      setLoading(true);
      const intent = await intentHandler();
      setIntentData(intent);
      const tokens = ["sol", "usdc", ...(intent.metadata as any).tokens.tokens];
      setPrices(await fetchTokenPrices(tokens));
      setOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {intentData && (
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
              <DialogTitle>
                <img
                  src={(intentData.user as any).avatar}
                  className="h-8 w-8 rounded-sm"
                  alt={(intentData?.metadata as any).merchant_name}
                />
                Pay ${(intentData.metadata as any).amount} to{" "}
                {(intentData?.metadata as any).merchant_name}
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-3">
              <p className="font-medium text-neutral-500">Choose a Token</p>
              <div className="flex justify-between">
                {tokens.map((method) => (
                  <div
                    className={cn(
                      "border-[3px] rounded-md h-[4.5rem] w-24 cursor-pointer text-sm flex flex-col items-start gap-2 justify-center px-2 text-[#94A3B8] font-medium hover:bg-neutral-50 transition-colors duration-100",
                      activeMethod === method && "border-[#8B55FF]"
                    )}
                    onClick={() => {
                      setMethod(method);
                    }}
                    key={method}
                  >
                    <img
                      src={
                        MAINNET_TOKENS[method.toUpperCase() as MainnetTokens]
                          .image
                      }
                      alt={method}
                      className="h-5 w-5 rounded-full"
                    />
                    {method.toUpperCase()}
                  </div>
                ))}
              </div>

              <PayButton
                {...{
                  intentData,
                  activeMethod,
                  prices,
                  onSuccess,
                  onClose,
                }}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
      {publicKey ? (
        <Button variant="brand" onClick={handleClick}>
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Pay with CandyPay"
          )}
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
