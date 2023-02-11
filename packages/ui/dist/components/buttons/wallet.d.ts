import { ITheme } from '../../typings/index.js';
import { FC } from 'react';
import '../../typings/Context.js';
import '@candypay/checkout-sdk';
import '@tanstack/react-query';
import '../../typings/intent.js';

declare const ConnectWallet: FC<{
    theme: ITheme;
}>;

export { ConnectWallet };
