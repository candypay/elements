import { CheckoutProvider } from "@candypay/elements";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "../styles/fonts.css";
import("@solana/wallet-adapter-react-ui/styles.css" as any);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CheckoutProvider network="mainnet">
      <Toaster />
      <Component {...pageProps} />
    </CheckoutProvider>
  );
};

export default App;
