import { MainnetTokens, MAINNET_TOKENS, PAY_API_URL, reference } from "@/lib";
import { TTokens } from "@/typings";
import { PublicKey, Transaction } from "@solana/web3.js";
import axios, { AxiosRequestConfig } from "axios";

const generateTxn = async (
  method: TTokens,
  merchant: string,
  amount: number,
  publicKey: PublicKey
) => {
  try {
    const fee = 0.01;

    const options: AxiosRequestConfig = {
      method: "POST",
      url: `${PAY_API_URL}/builder/${method === "usdc" ? "spl" : "atomic"}`,
      data: {
        network: "mainnet",
        user: publicKey.toString(),
        merchant: merchant,
        input_token:
          MAINNET_TOKENS[method.toUpperCase() as MainnetTokens].address,
        token_address: MAINNET_TOKENS.USDC.address,
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
