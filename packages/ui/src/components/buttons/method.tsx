import { MainnetTokens, MAINNET_TOKENS } from "@/lib";
import { Button, Image, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { IMethodProps } from "@/typings";
import { useTheme } from "@/lib/hooks/useTheme";

const btnStyles = {
  variant: "outline",
  fontSize: "md",
  fontWeight: "400",
  color: "#94A3B8",
  display: "flex",
  alignItems: "flex-start",
  py: "1",
  h: "4.5rem",
  gap: "2",
  w: "full",
  border: "3px solid",
  borderColor: "blackAlpha.200",
};

const MethodButton: FC<IMethodProps> = ({
  activeMethod,
  setActiveMethod,
  method,
  theme,
}) => {
  const cols = useTheme(theme);
  const borderColor = useMemo(() => {
    return cols.primary
      ? activeMethod === method
        ? cols.primary
        : "blackAlpha.200"
      : activeMethod === method
      ? "purple.500"
      : "blackAlpha.200";
  }, [activeMethod, cols.primary, method]);

  return (
    <Button
      {...btnStyles}
      flexDirection="column"
      borderColor={borderColor}
      onClick={() => setActiveMethod(method)}
    >
      <Image
        src={MAINNET_TOKENS[method.toUpperCase() as MainnetTokens].image}
        height="5"
        width="5"
        alt="dust"
      />
      <Text
        fontWeight="500"
        color={activeMethod === method ? "#0570DE" : " #727F95"}
        fontSize="14px"
      >
        {method.toUpperCase()}
      </Text>
    </Button>
  );
};

export { MethodButton };
