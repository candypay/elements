import { Keypair } from "@solana/web3.js";

export * from "./constants/tokens";
export * from "./constants/urls";

const reference = Keypair.generate();
export { reference };
