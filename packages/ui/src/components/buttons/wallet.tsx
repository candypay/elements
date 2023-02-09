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
  return (
    <WalletMultiButton
      style={{
        background: "#8b55ff",
        color: "#ffffff",
        borderRadius: "2px",
        width: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2.5rem",
        fontSize: "1rem",
        fontWeight: 500,
      }}
    />
  );
};

export { ConnectWallet };
