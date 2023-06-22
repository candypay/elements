import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, FC, ReactNode } from "react";

interface IContext {
  network: "mainnet" | "devnet";
}

const CheckoutContext = createContext<IContext>({} as IContext);

const queryClient = new QueryClient();

const CheckoutProvider: FC<{
  children: ReactNode;
  network: "mainnet" | "devnet";
}> = ({ children, network }) => {
  return (
    <CheckoutContext.Provider value={{
      network
    }}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </CheckoutContext.Provider>
  );
};

export { CheckoutContext, CheckoutProvider };
