import * as react from 'react';
import { FC, ReactNode } from 'react';
import { ICheckoutContext } from '../typings/Context.js';

declare const CheckoutContext: react.Context<ICheckoutContext>;
declare const CheckoutProvider: FC<{
    children: ReactNode;
    publicApiKey: string;
}>;

export { CheckoutContext, CheckoutProvider };
