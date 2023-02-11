import {
  CreateIntentResponse,
  PricesEntity,
  SessionMetadataResponse,
} from "@candypay/checkout-sdk";
import { UseMutateFunction } from "@tanstack/react-query";
import { IIntent, TTokens } from ".";

interface IPayProps {
  method: TTokens;
  onSuccess?: Function;
  onError?: Function;
}

interface ITheme {
  primaryColor?: string;
  secondaryColor?: string;
}

interface IProps {
  intentHandler: () => Promise<CreateIntentResponse>;
  onSuccess?: any;
  onError?: any;
  theme?: ITheme;
  value?: string;
  className?: string;
}

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  intentData: IIntent;
  onSuccess?: Function;
  onError?: Function;
  metadata: SessionMetadataResponse;
  prices: PricesEntity[];
  avatar: string;
  theme: ITheme;
}

interface IPay {
  method: TTokens;
  amount: number;
  intentData: IIntent;
  merchant: string;
  onClose: () => void;
  onSuccess?: Function;
  onError?: Function;
  amountToShow: number;
  theme: ITheme;
}

interface IRendererProps {
  mutate: UseMutateFunction;
  isLoading: boolean;
  className: string;
  value?: string;
  theme?: ITheme;
}

export type { IPayProps, IProps, ITheme, IModalProps, IPay, IRendererProps };
