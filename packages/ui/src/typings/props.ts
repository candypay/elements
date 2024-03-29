import {
  CreateIntentResponse,
  PricesEntity,
  SessionMetadataResponse,
} from "@candypay/checkout-sdk";
import { UseMutateFunction } from "@tanstack/react-query";
import { IIntent, ISuccessResponse, TTokens } from ".";

interface IPayProps {
  method: TTokens;
  onSuccess?: (response: ISuccessResponse) => void;
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
  user: any;
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
  user: any;
}

interface IRendererProps {
  mutate: UseMutateFunction;
  isLoading: boolean;
  className: string;
  value?: string;
  theme?: ITheme;
}

interface IMethods {
  activeMethod: TTokens;
  setActiveMethod: (method: TTokens) => void;
  methods: TTokens[];
  theme: ITheme;
}

interface IMethodProps {
  activeMethod: TTokens;
  setActiveMethod: (method: TTokens) => void;
  method: TTokens;
  theme: ITheme;
}

export type {
  IPayProps,
  IProps,
  ITheme,
  IModalProps,
  IPay,
  IRendererProps,
  IMethods,
  IMethodProps,
};
