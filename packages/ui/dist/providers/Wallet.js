"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/providers/Wallet.tsx
var Wallet_exports = {};
__export(Wallet_exports, {
  ClientWalletProvider: () => ClientWalletProvider
});
module.exports = __toCommonJS(Wallet_exports);
var import_wallet_adapter_base = require("@solana/wallet-adapter-base");
var import_wallet_adapter_react = require("@solana/wallet-adapter-react");
var import_wallet_adapter_react_ui = require("@solana/wallet-adapter-react-ui");
var import_wallet_adapter_wallets = require("@solana/wallet-adapter-wallets");
var import_web3 = require("@solana/web3.js");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
import("@solana/wallet-adapter-react-ui/styles.css");
var ClientWalletProvider = ({ children }) => {
  const endpoint = (0, import_web3.clusterApiUrl)(import_wallet_adapter_base.WalletAdapterNetwork.Mainnet);
  const wallets = (0, import_react.useMemo)(
    () => [
      new import_wallet_adapter_wallets.PhantomWalletAdapter(),
      new import_wallet_adapter_wallets.SolflareWalletAdapter(),
      new import_wallet_adapter_wallets.GlowWalletAdapter(),
      new import_wallet_adapter_wallets.LedgerWalletAdapter(),
      new import_wallet_adapter_wallets.SlopeWalletAdapter()
    ],
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wallet_adapter_react.ConnectionProvider, { endpoint, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wallet_adapter_react.WalletProvider, { autoConnect: true, wallets, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wallet_adapter_react_ui.WalletModalProvider, { children }) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClientWalletProvider
});
