import { Connection } from "@solana/web3.js";
import { MAINNET_RPC_URL } from "@/config";

export const useConnection = (network: "mainnet" | "devnet") => {
  if (network === "devnet") {
    return new Connection("https://api.devnet.solana.com");
  }
  return new Connection(MAINNET_RPC_URL);
};
