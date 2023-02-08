import { TTokens } from ".";

interface IPayProps {
  method: TTokens;
  onSuccess?: Function;
  onError?: Function;
}

export type { IPayProps };
