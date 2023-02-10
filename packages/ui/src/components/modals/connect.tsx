import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useWallet, Wallet } from "@solana/wallet-adapter-react";
import { FC, useMemo } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal: FC<IProps> = ({ isOpen, onClose }) => {
  const { wallets, select } = useWallet();

  const onConnectWallet = async (wallet: Wallet) => {
    try {
      await wallet.adapter.connect();
      select(wallet.adapter.name);
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  const filteredWallets = useMemo(() => {
    return wallets.filter(
      (wallet: Wallet) => wallet.readyState === "Installed"
    );
  }, [wallets]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
      <ModalOverlay />
      <ModalContent bgColor="white" px="0">
        <ModalHeader color="#262626" fontWeight="medium" fontSize="lg">
          Connect your wallet to continue
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody display="flex" flexDirection="column" gap="4" mb="4" mt="2">
          <Flex direction="column" w="full">
            {filteredWallets.map((wallet: Wallet, index) => (
              <Flex
                key={index}
                w="full"
                cursor="pointer"
                gap="2"
                fontWeight="medium"
                fontSize="md"
                _hover={{ bgColor: "#F7F7F7" }}
                onClick={() => onConnectWallet.bind(null, wallet)()}
                alignItems="center"
                py="2"
                px="2"
                justifyContent="space-between"
                rounded="md"
              >
                <Flex gap="2" alignItems="center">
                  <Image
                    src={wallet.adapter.icon}
                    w="7"
                    h="7"
                    alt={wallet.adapter.name}
                  />
                  {wallet.adapter.name}
                </Flex>

                <Text as="span" color="#404040" fontSize="sm">
                  Detected
                </Text>
              </Flex>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ConnectModal };
