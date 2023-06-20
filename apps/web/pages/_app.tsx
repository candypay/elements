import { CheckoutProvider } from "@candypay/elements";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { WALLET_NETWORK } from "../lib/constants";
import "../styles/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CheckoutProvider network={WALLET_NETWORK}>
      <Toaster />
      <Component {...pageProps} />
    </CheckoutProvider>
  );
};

export default App;
