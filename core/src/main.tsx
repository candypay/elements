import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { ClientWalletProvider } from "./components/wallet.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClientWalletProvider>
      <App />
    </ClientWalletProvider>
  </React.StrictMode>
);
