import { useTheme } from "@/lib/hooks/useTheme";
import { IRendererProps } from "@/typings";
import { Button } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { FC } from "react";
import { ConnectWallet } from "../buttons/wallet";

const Renderer: FC<IRendererProps> = ({
  className,
  mutate,
  isLoading,
  value,
  theme,
}) => {
  const { publicKey } = useWallet();
  const cols = useTheme(theme!);

  return publicKey ? (
    <Button
      px="16"
      rounded="md"
      fontWeight="medium"
      h="10"
      bgColor={cols.primary}
      color={cols.secondary}
      _hover={{ bgColor: "#7C4DFF" }}
      _active={{ bgColor: "#6B45FF" }}
      transition="all 0.2s ease-in-out"
      onClick={() => mutate()}
      isLoading={isLoading}
      className={className}
    >
      {value || "Pay with CandyPay"}
    </Button>
  ) : (
    <ConnectWallet theme={theme!} />
  );
};

export { Renderer };
