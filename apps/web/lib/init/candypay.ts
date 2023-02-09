import { CandyPay } from "@candypay/checkout-sdk";

const candypay = new CandyPay({
  api_keys: {
    public_api_key: process.env[`NEXT_PUBLIC_CP_API`] as string,
    private_api_key: process.env[`CANDYPAY_PRIVATE_KEY`] as string,
  },
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});

export { candypay };
