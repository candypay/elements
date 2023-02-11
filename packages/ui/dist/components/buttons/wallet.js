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

// src/lib/hooks/useTheme.ts
var import_react = require("react");
var useTheme = (theme) => {
  const cols = (0, import_react.useMemo)(() => {
    if (!theme)
      return {
        primary: "#8B55FF",
        secondary: "#FFFFFF"
      };
    const { primaryColor, secondaryColor } = theme;
    return {
      primary: primaryColor,
      secondary: secondaryColor
    };
  }, [theme]);
  return cols;
};

// src/components/buttons/wallet.tsx
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
var ConnectWallet = ({ theme }) => {
  const colors = useTheme(theme);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    WalletMultiButton,
    {
      style: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        borderRadius: "0.375rem",
        padding: "0.3rem 1rem",
        fontWeight: "regular",
        fontSize: "0.875rem",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        border: "none",
        width: "18rem",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "2.5rem"
      }
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConnectWallet
});
