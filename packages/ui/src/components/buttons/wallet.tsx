import { useTheme } from "@/lib/hooks/useTheme";
import dynamic from "next/dynamic";
import { FC } from "react";

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
  const { colors } = useTheme();

  return (
    <WalletMultiButton
      style={{
        backgroundColor: colors.primary,
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
