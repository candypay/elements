import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { FC } from "react";

const ConnectWallet: FC = () => {
  return (
    <WalletMultiButton
      style={{
        backgroundColor: "#8B55FF",
        color: "white",
        borderRadius: "0.375rem",
        padding: "0.3rem 1rem",
        fontWeight: "regular",
        fontSize: "0.875rem",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        border: "none",
        width: "18rem",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "2.5rem",
      }}
    />
  );
};

export { ConnectWallet };
