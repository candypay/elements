export { ICheckoutContext } from './Context.js';
import { CreateIntentResponse, SessionMetadataResponse, PricesEntity } from '@candypay/checkout-sdk';
import { UseMutateFunction } from '@tanstack/react-query';
import { IIntent } from './intent.js';

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

type TTokens = "sol" | "usdc" | "shdw" | "dust";
interface IMethods {
    activeMethod: TTokens;
    setActiveMethod: (method: TTokens) => void;
    methods: TTokens[];
}
interface IMethodProps {
    activeMethod: TTokens;
    setActiveMethod: (method: TTokens) => void;
    method: TTokens;
}

export { IIntent, IMethodProps, IMethods, IModalProps, IPay, IPayProps, IProps, IRendererProps, ITheme, TTokens };
