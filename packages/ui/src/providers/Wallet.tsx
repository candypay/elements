import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useMemo } from "react";

interface IProps {
  children: ReactNode;
  network: "mainnet" | "devnet";
}

const ClientWalletProvider: FC<IProps> = ({ children, network }) => {
  const endpoint = useMemo(() => {
    switch (network) {
      case "mainnet":
        return clusterApiUrl(WalletAdapterNetwork.Mainnet);
      case "devnet":
        return clusterApiUrl(WalletAdapterNetwork.Devnet);
      default:
        return clusterApiUrl(WalletAdapterNetwork.Mainnet);
    }
  }, [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider autoConnect wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export { ClientWalletProvider };
