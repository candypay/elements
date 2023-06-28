import { createContext, FC, ReactNode } from "react";

interface IContext {
  network: "mainnet" | "devnet";
}

const CheckoutContext = createContext<IContext>({} as IContext);

const CheckoutProvider: FC<{
  children: ReactNode;
  network: "mainnet" | "devnet";
}> = ({ children, network }) => {
  return (
    <CheckoutContext.Provider
      value={{
        network,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutContext, CheckoutProvider };
