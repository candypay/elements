import {
  Box,
  Button,
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
import type { Wallet as SolanaWallet } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConnectWallet: (wallet: SolanaWallet) => Promise<void>;
}

export const ConnectWalletModal = ({
  isOpen,
  onClose,
  onConnectWallet,
}: Props) => {
  const { wallets, connected, connecting } = useWallet();
  useEffect(() => {
    if (connected) {
      onClose();
    }
  }, [connected]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{
          base: "xs",
          md: "sm",
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align="center" gap="1">
              <Image src="https://candypay.fun/assets/logo.png" h="6" w="6" alt="candypay logo" />

              <Text fontWeight="bold" fontSize="lg" color="black">
                Connect Wallet
              </Text>
            </Flex>

            <ModalCloseButton />
          </ModalHeader>
          <ModalBody p="6" mt="-4">
            <Flex
              align="center"
              justify="center"
              bg="white"
              gap="2"
              flexDir="column"
            >
              <Flex
                align="start"
                justify="center"
                gap="1rem"
                w="100%"
                flexFlow="column"
              >
                {wallets.map((wallet: SolanaWallet, index: number) => (
                  <Button
                    key={index}
                    w="full"
                    px="2"
                    h="10"
                    rounded="md"
                    cursor="pointer"
                    onClick={onConnectWallet.bind(null, wallet)}
                    border="1px solid"
                    borderColor="hsla(214.3 31.8% 91.4%)"
                    gap="2"
                    _hover={{
                      bg: "neutral.100",
                    }}
                    transition="all 0.2s"
                    variant="unstyled"
                    display="flex"
                    justifyContent="flex-start"
                    isLoading={wallet.adapter.connecting}
                    loadingText="Connecting"
                  >
                    <Image
                      src={wallet.adapter.icon}
                      w="1.5rem"
                      h="1.5rem"
                      alt={wallet.adapter.name + " logo"}
                    />

                    <Text color="neutral.700" fontWeight="medium">
                      {wallet.adapter.name}
                    </Text>

                    {wallet.readyState === "Installed" && (
                      <Box
                        bgColor="rgba(124, 58, 237, 0.1)"
                        color="rgba(139, 92, 246, 1)"
                        px="2"
                        py="1"
                        rounded="md"
                        fontSize="xs"
                        fontWeight="medium"
                        ml="auto"
                      >
                        Detected
                      </Box>
                    )}
                  </Button>
                ))}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
