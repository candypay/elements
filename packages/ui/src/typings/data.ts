import { TTokens } from ".";

export interface IData {
  session: Session;
  merchant: Merchant;
  prices: PricesEntity[];
}

export interface Session {
  id: string;
  session_id: string;
  order_id: string;
  user: string;
  merchant: string;
  customer: string;
  customer_email: string;
  merchant_name: string;
  support_email: string;
  network: string;
  items: ItemsEntity[];
  tokens: {
    tokens: TTokens[];
  };
  amount: number;
  expire_after: number;
  success_url: string;
  cancel_url: string;
  config: Config;
  status: string;
  signature: string;
  shipping_address: string;
  shipping_fees?: number | null;
  created_at: string;
  updated_at: string;
  is_expired: boolean;
  is_intent: boolean;
  discounts?: {
    discount: number;
    image: string;
    name: string;
    verified_creator_address: string;
  } | null;
}

export interface ItemsEntity {
  id: number;
  color: string;
  href: string;
  name: string;
  image: string;
  price: number;
  imageAlt: string;
  quantity: number;
}

export interface Config {
  collect_shipping_address: boolean;
}

export interface Merchant {
  id: string;
  user_id: string;
  username: string;
  business_name: string;
  wallet_address: string;
  email: string;
  support_email?: string;
  avatar: string;
  webhooks: Webhooks;
  custom_fees?: number | null;
}

export interface Webhooks {
  endpoint_id: string;
  application_id: string;
  endpoint_url: string;
}

export interface PricesEntity {
  token: string;
  price: number;
}
