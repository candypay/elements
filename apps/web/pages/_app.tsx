import { CheckoutProvider } from "@candypay/elements";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "../styles/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CheckoutProvider network="devnet">
      <Toaster />
      <Component {...pageProps} />
    </CheckoutProvider>
  );
};

export default App;
