import { TTokens } from "@/typings";
import { PricesEntity } from "@candypay/checkout-sdk";

const resolveAmount = (
  method: TTokens,
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

export { resolveAmount };
