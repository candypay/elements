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

// src/components/buttons/wallet.tsx
var wallet_exports = {};
__export(wallet_exports, {
  ConnectWallet: () => ConnectWallet
});
module.exports = __toCommonJS(wallet_exports);
var import_dynamic = __toESM(require("next/dynamic"));
var import_jsx_runtime = require("react/jsx-runtime");
var WalletMultiButton = (0, import_dynamic.default)(
  () => import("@solana/wallet-adapter-react-ui").then(
    (mod) => mod.WalletMultiButton
  ),
  {
    ssr: false
  }
);
var ConnectWallet = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    WalletMultiButton,
    {
      style: {
        background: "#8b55ff",
        color: "#ffffff",
        borderRadius: "2px",
        width: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2.5rem",
        fontSize: "1rem",
        fontWeight: 500
      }
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConnectWallet
});
