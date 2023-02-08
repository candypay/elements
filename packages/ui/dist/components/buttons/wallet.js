"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/buttons/wallet.tsx
var wallet_exports = {};
__export(wallet_exports, {
  ConnectWallet: () => ConnectWallet
});
module.exports = __toCommonJS(wallet_exports);
var import_wallet_adapter_react_ui = require("@solana/wallet-adapter-react-ui");
var import_jsx_runtime = require("react/jsx-runtime");
var ConnectWallet = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_wallet_adapter_react_ui.WalletMultiButton, {});
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConnectWallet
});
