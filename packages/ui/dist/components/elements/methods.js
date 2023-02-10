"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

// src/components/elements/methods.tsx
var methods_exports = {};
__export(methods_exports, {
  Methods: () => Methods
});
module.exports = __toCommonJS(methods_exports);
var import_react2 = require("@chakra-ui/react");

// src/lib/index.ts
var import_web3 = require("@solana/web3.js");

// src/lib/constants/tokens.ts
var MainnetTokens = /* @__PURE__ */ ((MainnetTokens3) => {
  MainnetTokens3["SOL"] = "SOL";
  MainnetTokens3["USDC"] = "USDC";
  MainnetTokens3["SAMO"] = "SAMO";
  MainnetTokens3["DUST"] = "DUST";
  MainnetTokens3["SHDW"] = "SHDW";
  MainnetTokens3["BONK"] = "BONK";
  MainnetTokens3["BSOL"] = "BSOL";
  return MainnetTokens3;
})(MainnetTokens || {});
var DevnetTokens = /* @__PURE__ */ ((DevnetTokens2) => {
  DevnetTokens2["SOL"] = "SOL";
  DevnetTokens2["USDC"] = "USDC";
  return DevnetTokens2;
})(DevnetTokens || {});
var MAINNET_SUPPORTED_SPL_TOKENS = Object.keys(MainnetTokens).map(
  (token) => token.toLowerCase()
);
var DEVNET_SUPPORTED_SPL_TOKENS = Object.keys(DevnetTokens).map(
  (token) => token.toLowerCase()
);
var MAINNET_TOKENS = {
  ["SOL" /* SOL */]: {
    symbol: "\u25CE",
    address: "So11111111111111111111111111111111111111112",
    image: "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540678/Vector_1_zxj0wf.png" /* SOL */
  },
  ["USDC" /* USDC */]: {
    symbol: "$",
    address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    image: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513791/tokens-cp/usdc_s6cnic.png" /* USDC */
  },
  ["SAMO" /* SAMO */]: {
    symbol: "SAMO",
    address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    image: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513792/tokens-cp/samo_sehxow.png" /* SAMO */
  },
  ["DUST" /* DUST */]: {
    symbol: "DUST",
    address: "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
    image: "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540717/Group_12_mvmsno.png" /* DUST */
  },
  ["SHDW" /* SHDW */]: {
    symbol: "SHDW",
    address: "SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y",
    image: "https://res.cloudinary.com/dtzqgftjk/image/upload/v1674382762/10B-S-Logomark_yfpjg9.png" /* SHDW */
  },
  ["BONK" /* BONK */]: {
    symbol: "BONK",
    address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    image: "https://res.cloudinary.com/dtzqgftjk/image/upload/v1672866132/bonk_uxksik.png" /* BONK */
  },
  ["BSOL" /* BSOL */]: {
    symbol: "bSOL",
    address: "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
    image: "https://res.cloudinary.com/dtzqgftjk/image/upload/v1674545342/image-proxy_rlrouk.png" /* BSOL */
  }
};

// src/lib/index.ts
var reference = import_web3.Keypair.generate();

// src/components/buttons/method.tsx
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var btnStyles = {
  variant: "outline",
  fontSize: "md",
  fontWeight: "400",
  color: "#94A3B8",
  display: "flex",
  alignItems: "flex-start",
  py: "1",
  h: "4.5rem",
  gap: "2",
  minW: "20",
  w: "100%",
  maxW: "24",
  border: "3px solid",
  borderColor: "blackAlpha.200"
};
var MethodButton = ({
  activeMethod,
  setActiveMethod,
  method
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react.Button,
    __spreadProps(__spreadValues({}, btnStyles), {
      flexDirection: "column",
      borderColor: activeMethod === method ? "purple.500" : "blackAlpha.200",
      onClick: () => setActiveMethod(method),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react.Image,
          {
            src: MAINNET_TOKENS[method.toUpperCase()].image,
            height: "5",
            width: "5",
            alt: "dust"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react.Text,
          {
            fontWeight: "500",
            color: activeMethod === method ? "#0570DE" : " #727F95",
            fontSize: "14px",
            children: method.toUpperCase()
          }
        )
      ]
    })
  );
};

// src/components/elements/methods.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Methods = ({ activeMethod, setActiveMethod, methods }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Flex, { direction: "column", gap: "3", w: "full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Text, { fontSize: "md", fontWeight: "500", color: "#697386", textAlign: "left", children: "Choose a Token" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Grid,
      {
        gap: "1",
        templateColumns: {
          base: "repeat(4, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)"
        },
        w: "full",
        alignItems: "center",
        justifyContent: "center",
        children: methods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          MethodButton,
          {
            activeMethod,
            setActiveMethod,
            method
          },
          method
        ))
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Methods
});
