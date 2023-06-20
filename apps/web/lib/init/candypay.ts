import { CandyPay } from "@candypay/checkout-sdk";
import { WALLET_NETWORK } from "../constants";

const candypay = new CandyPay({
  api_keys: {
    public_api_key: process.env[`NEXT_PUBLIC_CP_API`] as string,
    private_api_key: process.env[`CANDYPAY_PRIVATE_KEY`] as string,
  },
  network: WALLET_NETWORK,
  config: {
    collect_shipping_address: false,
  },
});

export { candypay };
