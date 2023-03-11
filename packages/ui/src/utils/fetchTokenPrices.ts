import { MAINNET_TOKENS } from "@candypay/common";
import axios from "axios";

type Token = {
  id: string;
  mintSymbol: string;
  vsToken: string;
  vsTokenSymbol: string;
  price: number;
};

const preciseRound = (number: number, precision: number) => {
  const multiplier = !!precision ? Math.pow(10, precision) : 1;
  return Math.ceil(number * multiplier) / multiplier;
};

type TTokens = "sol" | "usdc" | "dust" | "samo" | "shdw" | "bonk";

const fetchTokenPrices = async (tokens: TTokens[]) => {
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

export { fetchTokenPrices };
