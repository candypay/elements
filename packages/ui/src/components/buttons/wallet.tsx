import { Button, useDisclosure } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { FC } from "react";
import { ConnectModal } from "../modals/connect";

const ConnectWallet: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { publicKey } = useWallet();

  return (
    <>
      <ConnectModal isOpen={isOpen} onClose={onClose} />
      <Button
        px="16"
        rounded="md"
        fontWeight="medium"
        h="10"
        bgColor="#8B55FF"
        color="white"
        _hover={{ bgColor: "#7C4DFF" }}
        _active={{ bgColor: "#6B45FF" }}
        transition="all 0.2s ease-in-out"
        onClick={onOpen}
      >
        Connect Wallet
      </Button>
    </>
  );
};

export { ConnectWallet };
