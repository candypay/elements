import { IIntent } from '../../typings/intent.js';
import { FC } from 'react';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    intentData: IIntent;
}
declare const PayModal: FC<IProps>;

export { PayModal };
