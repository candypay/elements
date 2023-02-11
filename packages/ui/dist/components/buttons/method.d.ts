import { FC } from 'react';
import { IMethodProps } from '../../typings/index.js';
import '../../typings/Context.js';
import '@candypay/checkout-sdk';
import '@tanstack/react-query';
import '../../typings/intent.js';

declare const MethodButton: FC<IMethodProps>;

export { MethodButton };
