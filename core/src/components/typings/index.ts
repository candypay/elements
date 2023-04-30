import { CreateIntentResponse, PricesEntity } from "@candypay/checkout-sdk";

export type Tokens = "sol" | "usdc" | "dust" | "samo" | "shdw" | "bonk";

export interface PayElementProps {
  intentHandler: () => Promise<CreateIntentResponse>;
  onSuccess?: (signature: string) => void;
}

export interface PayButtonProps {
  activeMethod: Tokens;
  prices: PricesEntity[];
  intentData: CreateIntentResponse;
  onSuccess?: (signature: string) => void;
  onClose: () => void;
}

export type Token = {
  id: string;
  mintSymbol: string;
  vsToken: string;
  vsTokenSymbol: string;
  price: number;
};
