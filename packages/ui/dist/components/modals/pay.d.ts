import { SessionMetadataResponse, PricesEntity } from '@candypay/checkout-sdk';
import { IIntent } from '../../typings/intent.js';
import { FC } from 'react';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    intentData: IIntent;
    onSuccess?: Function;
    onError?: Function;
    metadata: SessionMetadataResponse;
    prices: PricesEntity[];
}
declare const PayModal: FC<IProps>;

export { PayModal };
