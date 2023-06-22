import { IProps } from "@/typings";
import { ChakraProvider } from "@chakra-ui/react";
import type { FC } from "react";
import { PayElement } from "./main";

// wraps the application in chakra provider
export const ElementWrapper: FC<IProps> = ({
  intentHandler,
  onError,
  onSuccess,
  theme,
  value,
  className,
}) => {
  return (
    <ChakraProvider>
      <PayElement
        {...{
          intentHandler,
          onError,
          onSuccess,
          theme,
          value,
          className,
        }}
      />
    </ChakraProvider>
  );
};
