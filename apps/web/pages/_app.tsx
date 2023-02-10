import { CheckoutProvider } from "elements";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "../styles/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <CandyPayProvider
    //   publicApiKey={process.env[`NEXT_PUBLIC_CP_API`] as string}
    // >
    <CheckoutProvider
      publicApiKey={process.env[`NEXT_PUBLIC_CP_API`] as string}
    >
      <Toaster />
      <Component {...pageProps} />
    </CheckoutProvider>
    // </CandyPayProvider>
  );
};

export default App;
