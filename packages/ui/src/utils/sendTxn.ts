import { PAY_API_URL } from "@/config";
import {
  DevnetTokens,
  DEVNET_TOKENS,
  MainnetTokens,
  MAINNET_TOKENS,
  reference,
} from "@/lib";
import { TTokens } from "@/typings";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import axios, { AxiosRequestConfig } from "axios";

const generateTxn = async (
  method: TTokens,
  merchant: string,
  amount: number,
  publicKey: PublicKey,
  network: "mainnet" | "devnet",
  amountOfTokens: number,
  custom_fees?: number | undefined | null
) => {
  try {
    const fee = custom_fees !== undefined || custom_fees !== null ? custom_fees : 0.01;

    if (network === "devnet" && method === "sol") {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey!,
          toPubkey: new PublicKey(merchant),
          lamports: LAMPORTS_PER_SOL * amountOfTokens,
        })
      );

      return transaction;
    }

    const options: AxiosRequestConfig = {
      method: "POST",
      url: `${PAY_API_URL}/builder/${method === "usdc" ? "spl" : "atomic"}`,
      data: {
        network,
        user: publicKey.toString(),
        merchant: merchant,
        input_token:
          network === "mainnet"
            ? MAINNET_TOKENS[method.toUpperCase() as MainnetTokens].address
            : DEVNET_TOKENS[method.toUpperCase() as DevnetTokens].address,
        token_address:
          network === "mainnet"
            ? MAINNET_TOKENS["USDC"].address
            : DEVNET_TOKENS["USDC"].address,
        reference: reference.publicKey.toBase58(),
        amount: Number(amount),
        fee: fee,
        nft_discounts: undefined,
      },
    };

    const { data } = await axios.request(options);

    return Transaction.from(Buffer.from(data.transaction, "base64"));
  } catch (error) {
    return null;
  }
};

export { generateTxn };
