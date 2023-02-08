import { ICheckoutContext } from "@/typings";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, FC, ReactNode } from "react";
import { ClientWalletProvider } from "./Wallet";

const CheckoutContext = createContext<ICheckoutContext>({} as ICheckoutContext);

const queryClient = new QueryClient();

const CheckoutProvider: FC<{
  children: ReactNode;
  publicApiKey: string;
}> = ({ children, publicApiKey }) => {
  return (
    <CheckoutContext.Provider
      value={{
        publicApiKey,
      }}
    >
      <ClientWalletProvider>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
      </ClientWalletProvider>
    </CheckoutContext.Provider>
  );
};

export { CheckoutContext, CheckoutProvider };
