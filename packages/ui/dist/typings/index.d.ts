export { ICheckoutContext } from './Context.js';

interface IPayProps {
    method: TTokens;
    onSuccess?: Function;
    onError?: Function;
}

type TTokens = "sol" | "usdc" | "shdw" | "dust";
interface IMethods {
    activeMethod: TTokens;
    setActiveMethod: (method: TTokens) => void;
}
interface IMethodProps {
    activeMethod: TTokens;
    setActiveMethod: (method: TTokens) => void;
    method: TTokens;
}

export { IMethodProps, IMethods, IPayProps, TTokens };
