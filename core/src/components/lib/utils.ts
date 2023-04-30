import { CandyPay, PricesEntity } from "@candypay/checkout-sdk";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { MAINNET_TOKENS, MainnetTokens } from "@candypay/common";
import axios, { AxiosRequestConfig } from "axios";
import { Token, Tokens } from "../typings";
import { PublicKey, Transaction } from "@solana/web3.js";
import { API_URL, PAY_API_URL, reference } from "./constants";

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

const preciseRound = (number: number, precision: number) => {
  const multiplier = precision ? Math.pow(10, precision) : 1;
  return Math.ceil(number * multiplier) / multiplier;
};

export const fetchTokenPrices = async (tokens: Tokens[]) => {
  const tokensAddresses = tokens.map((token) => {
    const method = token.toUpperCase() as keyof typeof MAINNET_TOKENS;
    return MAINNET_TOKENS[method].address;
  });

  const prices = await axios.get(
    `https://price.jup.ag/v4/price?ids=${tokensAddresses.join(",")}`
  );

  const result: Array<{
    token: string;
    price: number;
  }> = [];
  tokensAddresses.forEach((token: string) => {
    const tokenMetadata = prices.data.data[token] as Token;
    result.push({
      token: tokenMetadata.mintSymbol.toLowerCase(),
      price: preciseRound(tokenMetadata.price, 5),
    });
  });

  return result;
};

export const resolveAmount = (
  method: Tokens,
  prices: PricesEntity[],
  amountInUsdc: number
) => {
  if (method === "usdc") {
    return amountInUsdc;
  }
  const amount = prices.find(
    (price: PricesEntity) => price.token === method
  )?.price;

  if (Number((amountInUsdc / amount!).toFixed(3)) === 0.0) {
    return 0.001;
  } else {
    return Number((amountInUsdc / amount!).toFixed(3));
  }
};

export const generateTxn = async (
  method: Tokens,
  merchant: string,
  amount: number,
  publicKey: PublicKey
) => {
  const fee = 0.01;

  const options: AxiosRequestConfig = {
    method: "POST",
    url: `${PAY_API_URL}/builder/${method === "usdc" ? "spl" : "atomic"}`,
    data: {
      network: "mainnet",
      user: publicKey.toString(),
      merchant,
      input_token:
        MAINNET_TOKENS[method.toUpperCase() as MainnetTokens].address,
      token_address: MAINNET_TOKENS.USDC.address,
      reference: reference.publicKey.toBase58(),
      amount: Number(amount),
      fee,
    },
  };

  const { data } = await axios.request(options);

  return Transaction.from(Buffer.from(data.transaction, "base64"));
};

export const updateTxn = async (
  session_id: string,
  signature: string,
  intent_secret_key: string
) => {
  const options: AxiosRequestConfig = {
    method: "PATCH",
    url: `${API_URL}/api/v1/intent`,
    headers: {
      Authorization: `Bearer ${intent_secret_key}`,
    },
    data: {
      session_id,
      signature,
      timestamp: new Date().toISOString(),
    },
  };

  return await axios.request(options).then((response) => response.data);
};
