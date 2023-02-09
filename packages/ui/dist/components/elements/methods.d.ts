import { FC } from 'react';
import { IMethods } from '../../typings/index.js';
import '../../typings/Context.js';
import '@candypay/checkout-sdk';
import '../../typings/intent.js';

declare const Methods: FC<IMethods>;

export { Methods };
