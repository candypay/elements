import { ConnectWalletModal } from "../modals/connect";
import { Button, useDisclosure } from "@chakra-ui/react";
import type { Wallet as SolanaWallet } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { FC } from "react";
import { ITheme } from "@/typings";
import { useTheme } from "@/lib/hooks/useTheme";

export const ConnectButton: FC<{
  theme: ITheme;
}> = ({ theme }) => {
  const { connecting, connected, select } = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cols = useTheme(theme!);

  const onConnectWallet = async (solanaWallet: SolanaWallet) => {
    try {
      select(solanaWallet.adapter.name);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <ConnectWalletModal
        isOpen={isOpen}
        onClose={onClose}
        onConnectWallet={onConnectWallet}
      />
      <Button
        px="16"
        rounded="md"
        fontWeight="medium"
        h="10"
        bgColor={cols.primary}
        color={cols.secondary}
        _hover={{ bgColor: !cols.primary ? "#7C4DFF" : "auto" }}
        _active={{
          bgColor: !cols.primary ? "#6B45FF" : "auto",
        }}
        transition="all 0.2s ease-in-out"
        onClick={() => {
          !connected && onOpen();
        }}
      >
        {connecting
          ? "Connecting..."
          : connected
          ? "Connected"
          : "Connect Wallet"}
      </Button>
    </>
  );
};
