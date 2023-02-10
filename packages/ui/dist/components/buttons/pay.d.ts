import { TTokens } from '../../typings/index.js';
import { FC } from 'react';
import { IIntent } from '../../typings/intent.js';
import '../../typings/Context.js';
import '@candypay/checkout-sdk';

interface IProps {
    method: TTokens;
    amount: number;
    intentData: IIntent;
    merchant: string;
    onClose: () => void;
    onSuccess?: any;
    onError?: any;
    amountToShow: number;
}
declare const PayButton: FC<IProps>;

export { PayButton };
