import { Connection } from "@solana/web3.js";
import { MAINNET_RPC_URL } from "@/config";

export const useConnection = (network: "mainnet" | "devnet") => new Connection(
  network === "mainnet" ? MAINNET_RPC_URL : "https://api.devnet.solana.com",
)
