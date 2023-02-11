"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/components/modals/pay.tsx
var pay_exports = {};
__export(pay_exports, {
  PayModal: () => PayModal
});
module.exports = __toCommonJS(pay_exports);

// src/utils/resolveAmount.ts
var resolveAmount = (method, prices, amountInUsdc) => {
  var _a;
  if (method === "usdc") {
    return amountInUsdc;
  }
  const amount = (_a = prices.find(
    (price) => price.token === method
  )) == null ? void 0 : _a.price;
  if (Number((amountInUsdc / amount).toFixed(3)) === 0) {
    return 1e-3;
  } else {
    return Number((amountInUsdc / amount).toFixed(3));
  }
};

// src/components/modals/pay.tsx
var import_react5 = require("@chakra-ui/react");
var import_react6 = require("react");

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

// src/lib/index.ts
var import_web3 = require("@solana/web3.js");

// src/lib/constants/tokens.ts
var MainnetTokens = /* @__PURE__ */ ((MainnetTokens4) => {
  MainnetTokens4["SOL"] = "SOL";
  MainnetTokens4["USDC"] = "USDC";
  MainnetTokens4["SAMO"] = "SAMO";
  MainnetTokens4["DUST"] = "DUST";
  MainnetTokens4["SHDW"] = "SHDW";
  MainnetTokens4["BONK"] = "BONK";
  MainnetTokens4["BSOL"] = "BSOL";
  return MainnetTokens4;
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

// src/lib/constants/urls.ts
var PAY_API_URL = "https://pay.candypay.fun";
var DEV_API_URL = "https://checkout-dev-api.candypay.fun";

// src/lib/index.ts
var reference = import_web3.Keypair.generate();

// src/utils/sendTxn.ts
var import_web32 = require("@solana/web3.js");
var import_axios = __toESM(require("axios"));
var generateTxn = (method, merchant, amount, publicKey) => __async(void 0, null, function* () {
  try {
    const fee = 0.01;
    const options = {
      method: "POST",
      url: `${PAY_API_URL}/builder/${method === "usdc" ? "spl" : "atomic"}`,
      data: {
        network: "mainnet",
        user: publicKey.toString(),
        merchant,
        input_token: MAINNET_TOKENS[method.toUpperCase()].address,
        token_address: MAINNET_TOKENS.USDC.address,
        reference: reference.publicKey.toBase58(),
        amount: Number(amount),
        fee,
        nft_discounts: void 0
      }
    };
    const { data } = yield import_axios.default.request(options);
    return import_web32.Transaction.from(Buffer.from(data.transaction, "base64"));
  } catch (error) {
    return null;
  }
});

// src/utils/updateTxn.ts
var import_axios2 = __toESM(require("axios"));
var updateTxn = (session_id, signature, intent_secret_key) => __async(void 0, null, function* () {
  const options = {
    method: "PATCH",
    url: `${DEV_API_URL}/api/v1/intent`,
    headers: {
      Authorization: `Bearer ${intent_secret_key}`
    },
    data: {
      session_id,
      signature,
      timestamp: new Date().toISOString()
    }
  };
  try {
    const res = yield (0, import_axios2.default)(options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

// src/components/buttons/pay.tsx
var import_react2 = require("@chakra-ui/react");
var import_wallet_adapter_react = require("@solana/wallet-adapter-react");
var import_react_query = require("@tanstack/react-query");
var import_jsx_runtime = require("react/jsx-runtime");
var PayButton = ({
  method,
  amount,
  intentData,
  merchant,
  onClose,
  onSuccess,
  onError,
  amountToShow,
  theme
}) => {
  const { publicKey, sendTransaction } = (0, import_wallet_adapter_react.useWallet)();
  const { connection } = (0, import_wallet_adapter_react.useConnection)();
  const cols = useTheme(theme);
  const { mutate, isLoading } = (0, import_react_query.useMutation)({
    mutationFn: () => __async(void 0, null, function* () {
      const txn = yield generateTxn(method, merchant, amount, publicKey);
      const signature = yield sendTransaction(txn, connection);
      const res = yield updateTxn(
        intentData.sessionId,
        signature,
        intentData.intentSecret
      );
      return res;
    }),
    onSuccess: (data) => {
      if (!data.error) {
        onSuccess && onSuccess(data);
        onClose();
      }
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: amountToShow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_react2.Button,
    {
      px: "16",
      w: "full",
      rounded: "md",
      fontWeight: "medium",
      h: "10",
      bgColor: cols.primary,
      color: cols.secondary,
      _hover: { bgColor: "#7C4DFF" },
      _active: { bgColor: "#6B45FF" },
      transition: "all 0.2s ease-in-out",
      onClick: () => mutate(),
      isLoading,
      isDisabled: !amount,
      children: [
        "Pay ",
        amountToShow,
        " ",
        method.toUpperCase()
      ]
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Skeleton, { w: "full", h: "10", rounded: "md" }) });
};

// src/components/elements/methods.tsx
var import_react4 = require("@chakra-ui/react");

// src/components/buttons/method.tsx
var import_react3 = require("@chakra-ui/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_react3.Button,
    __spreadProps(__spreadValues({}, btnStyles), {
      flexDirection: "column",
      borderColor: activeMethod === method ? "purple.500" : "blackAlpha.200",
      onClick: () => setActiveMethod(method),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react3.Image,
          {
            src: MAINNET_TOKENS[method.toUpperCase()].image,
            height: "5",
            width: "5",
            alt: "dust"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react3.Text,
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
var import_jsx_runtime3 = require("react/jsx-runtime");
var Methods = ({ activeMethod, setActiveMethod, methods }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react4.Flex, { direction: "column", gap: "3", w: "full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Text, { fontSize: "md", fontWeight: "500", color: "#697386", textAlign: "left", children: "Choose a Token" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react4.Grid,
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
        children: methods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// src/components/modals/pay.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var PayModal = ({
  isOpen,
  onClose,
  intentData,
  onError,
  onSuccess,
  metadata,
  avatar,
  prices,
  theme
}) => {
  const [activeMethod, setActiveMethod] = (0, import_react6.useState)("sol");
  const methods = (0, import_react6.useMemo)(() => {
    const defaultMethods = ["sol", "usdc"];
    if (!metadata.tokens) {
      return defaultMethods;
    }
    return [...defaultMethods, ...metadata.tokens.tokens];
  }, [metadata.tokens]);
  const amountToShow = (0, import_react6.useMemo)(() => {
    return resolveAmount(activeMethod, prices, metadata.amount);
  }, [metadata.amount, activeMethod, prices]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_react5.Modal,
    {
      isOpen,
      onClose,
      isCentered: true,
      closeOnEsc: false,
      closeOnOverlayClick: false,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.ModalOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react5.ModalContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react5.ModalHeader, { display: "flex", alignItems: "center", gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Image, { src: avatar, alt: "avatar", h: "8", w: "8", rounded: "sm" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react5.Text, { fontWeight: "bold", fontSize: "lg", children: [
              "Pay $",
              metadata == null ? void 0 : metadata.amount
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.ModalCloseButton, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            import_react5.ModalBody,
            {
              display: "flex",
              flexDirection: "column",
              gap: "4",
              alignItems: "center",
              mb: "4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  Methods,
                  {
                    activeMethod,
                    setActiveMethod,
                    methods
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  PayButton,
                  __spreadValues({
                    method: activeMethod,
                    amount: metadata == null ? void 0 : metadata.amount,
                    intentData,
                    merchant: metadata == null ? void 0 : metadata.merchant,
                    onClose
                  }, {
                    onSuccess,
                    onError,
                    amountToShow,
                    theme
                  })
                )
              ]
            }
          )
        ] })
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PayModal
});
