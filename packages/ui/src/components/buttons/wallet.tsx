import { FC } from "react";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  {
    ssr: false,
  }
);

const ConnectWallet: FC = () => {
  return <WalletMultiButton />;
};

export { ConnectWallet };
