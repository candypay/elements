import { Button, useDisclosure } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { FC } from "react";
import { ConnectWallet } from "./buttons/wallet";
import { PayModal } from "./modals/pay";

const PayElement: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { publicKey } = useWallet();

  return (
    <>
      <PayModal isOpen={isOpen} onClose={onClose} />
      {publicKey ? (
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
          Pay with CandyPay
        </Button>
      ) : (
        <ConnectWallet />
      )}
    </>
  );
};

export { PayElement };
