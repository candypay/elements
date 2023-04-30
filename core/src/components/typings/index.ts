import { CreateIntentResponse } from "@candypay/checkout-sdk";

export type Tokens = "sol" | "usdc" | "bonk" | "shdw" | "ptc" | "dust" | "samo";

export interface PayElementProps {
  intentHandler: () => Promise<CreateIntentResponse>;
}
