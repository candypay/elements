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

// src/components/buttons/wallet.tsx
var wallet_exports = {};
__export(wallet_exports, {
  ConnectWallet: () => ConnectWallet
});
module.exports = __toCommonJS(wallet_exports);
var import_react3 = require("@chakra-ui/react");
var import_wallet_adapter_react2 = require("@solana/wallet-adapter-react");

// src/components/modals/connect.tsx
var import_react = require("@chakra-ui/react");
var import_wallet_adapter_react = require("@solana/wallet-adapter-react");
var import_react2 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var ConnectModal = ({ isOpen, onClose }) => {
  const { wallets, select } = (0, import_wallet_adapter_react.useWallet)();
  const onConnectWallet = (wallet) => __async(void 0, null, function* () {
    try {
      yield wallet.adapter.connect();
      select(wallet.adapter.name);
      onClose();
    } catch (e) {
      console.log(e);
    }
  });
  const filteredWallets = (0, import_react2.useMemo)(() => {
    return wallets.filter(
      (wallet) => wallet.readyState === "Installed"
    );
  }, [wallets]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Modal, { isOpen, onClose, isCentered: true, size: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.ModalContent, { bgColor: "white", px: "0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalHeader, { color: "#262626", fontWeight: "medium", fontSize: "lg", children: "Connect your wallet to continue" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalCloseButton, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ModalBody, { display: "flex", flexDirection: "column", gap: "4", mb: "4", mt: "2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Flex, { direction: "column", w: "full", children: filteredWallets.map((wallet, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_react.Flex,
        {
          w: "full",
          cursor: "pointer",
          gap: "2",
          fontWeight: "medium",
          fontSize: "md",
          _hover: { bgColor: "#F7F7F7" },
          onClick: () => onConnectWallet.bind(null, wallet)(),
          alignItems: "center",
          py: "2",
          px: "2",
          justifyContent: "space-between",
          rounded: "md",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Flex, { gap: "2", alignItems: "center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react.Image,
                {
                  src: wallet.adapter.icon,
                  w: "7",
                  h: "7",
                  alt: wallet.adapter.name
                }
              ),
              wallet.adapter.name
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Text, { as: "span", color: "#404040", fontSize: "sm", children: "Detected" })
          ]
        },
        index
      )) }) })
    ] })
  ] });
};

// src/components/buttons/wallet.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ConnectWallet = () => {
  const { isOpen, onOpen, onClose } = (0, import_react3.useDisclosure)();
  const { publicKey } = (0, import_wallet_adapter_react2.useWallet)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ConnectModal, { isOpen, onClose }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react3.Button,
      {
        px: "16",
        rounded: "md",
        fontWeight: "medium",
        h: "10",
        bgColor: "#8B55FF",
        color: "white",
        _hover: { bgColor: "#7C4DFF" },
        _active: { bgColor: "#6B45FF" },
        transition: "all 0.2s ease-in-out",
        onClick: onOpen,
        children: "Connect Wallet"
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConnectWallet
});
