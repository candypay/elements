export { ICheckoutContext } from './Context.js';
import { CreateIntentResponse } from '@candypay/checkout-sdk';
export { IIntent } from './intent.js';

interface IPayProps {
    method: TTokens;
    onSuccess?: Function;
    onError?: Function;
}
interface IProps {
    intentHandler: () => Promise<CreateIntentResponse>;
    onSuccess?: any;
    onError?: any;
    theme?: {
        primaryColor?: string;
        secondaryColor?: string;
    };
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

export { IMethodProps, IMethods, IPayProps, IProps, TTokens };
