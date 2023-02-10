import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  LedgerWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useMemo } from "react";

interface IProps {
  children: ReactNode;
}

const ClientWalletProvider: FC<IProps> = ({ children }) => {
  const endpoint = clusterApiUrl(WalletAdapterNetwork.Mainnet);
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new SlopeWalletAdapter(),
    ],
    []
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export { ClientWalletProvider };
