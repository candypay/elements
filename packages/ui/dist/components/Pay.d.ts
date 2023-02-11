import { IProps } from '../typings/index.js';
import { FC } from 'react';
import '../typings/Context.js';
import '@candypay/checkout-sdk';
import '@tanstack/react-query';
import '../typings/intent.js';

declare const PayElement: FC<IProps>;

export { PayElement };
