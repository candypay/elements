import { Keypair } from "@solana/web3.js";

export * from "./constants/tokens";

const reference = Keypair.generate();
export { reference };
