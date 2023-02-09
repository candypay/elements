import { CreateIntentResponse } from "@candypay/checkout-sdk";
import { TTokens } from ".";

interface IPayProps {
  method: TTokens;
  onSuccess?: Function;
  onError?: Function;
}

interface IProps {
  intentHandler: () => Promise<CreateIntentResponse>;
}

export type { IPayProps, IProps };
