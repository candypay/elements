import { IProps } from "@/typings";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC } from "react";
import { PayElement } from "./main";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
