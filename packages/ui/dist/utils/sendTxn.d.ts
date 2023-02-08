import { TTokens } from '../typings/index.js';
import { PublicKey, Transaction } from '@solana/web3.js';
import '../typings/Context.js';

declare const generateTxn: (method: TTokens, merchant: string, amount: number, publicKey: PublicKey) => Promise<Transaction | null>;

export { generateTxn };
