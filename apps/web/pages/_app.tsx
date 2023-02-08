import { CheckoutProvider } from "elements";
import { AppProps } from "next/app";
import "../styles/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CheckoutProvider
      publicApiKey={process.env[`NEXT_PUBLIC_CP_API`] as string}
    >
      <Component {...pageProps} />
    </CheckoutProvider>
  );
};

export default App;
