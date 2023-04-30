import { CandyPay } from "@candypay/checkout-sdk";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const candypay = new CandyPay({
  api_keys: {
    public_api_key: import.meta.env.VITE_CANDYPAY_PUBLIC_KEY as string,
    private_api_key: import.meta.env.VITE_CANDYPAY_PRIVATE_KEY as string,
  },
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});
