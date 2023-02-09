import { CheckoutProvider } from "elements";
import { AppProps } from "next/app";
import "../styles/fonts.css";
import { CandyPayProvider } from "@candypay/react-checkout-sdk";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CandyPayProvider
      publicApiKey={process.env[`NEXT_PUBLIC_CP_API`] as string}
    >
      <CheckoutProvider
        publicApiKey={process.env[`NEXT_PUBLIC_CP_API`] as string}
      >
        <Component {...pageProps} />
      </CheckoutProvider>
    </CandyPayProvider>
  );
};

export default App;
