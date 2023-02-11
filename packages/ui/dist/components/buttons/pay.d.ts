import { IPay } from '../../typings/index.js';
import { FC } from 'react';
import '../../typings/Context.js';
import '@candypay/checkout-sdk';
import '../../typings/intent.js';

declare const PayButton: FC<IPay>;

export { PayButton };
