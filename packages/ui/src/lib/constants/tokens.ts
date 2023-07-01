export enum MainnetTokens {
  SOL = "SOL",
  USDC = "USDC",
  SAMO = "SAMO",
  DUST = "DUST",
  SHDW = "SHDW",
  BONK = "BONK",
  USDT = "USDT",
  PROSPERA = "PROSPERA",
  HNT = "HNT",
  ISC = "ISC",
}

export enum DevnetTokens {
  SOL = "SOL",
  USDC = "USDC",
}
export enum CustomTokens {
  PROSPERA = "PROSPERA",
}

export enum TokenImageURLs {
  SOL = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540678/Vector_1_zxj0wf.png",
  USDC = "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513791/tokens-cp/usdc_s6cnic.png",
  SAMO = "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513792/tokens-cp/samo_sehxow.png",
  DUST = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540717/Group_12_mvmsno.png",
  SHDW = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1674382762/10B-S-Logomark_yfpjg9.png",
  BONK = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1672866132/bonk_uxksik.png",
  PROSPERA = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1680009004/SLsd1eYMFAlGxRQcPc7Iqm1u8HRe67A7vDTIIo5RgcY_nzaqsq.png",
  USDT = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1680008965/Vector_2_opyqnn.png",
  HNT = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1685131002/Helium_HNT_n4usli.png",
  ISC = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1685131046/coin_color_sbbppy.png",
}

export type TTokens = Lowercase<keyof typeof MainnetTokens>;

export interface TokenMetadata {
  symbol: string;
  address: string;
  image: string;
}

export interface CustomTokenMetadata extends TokenMetadata {
  price: number;
}

export const MAINNET_SUPPORTED_SPL_TOKENS = Object.keys(MainnetTokens).map(
  (token) => token.toLowerCase()
);
export const DEVNET_SUPPORTED_SPL_TOKENS = Object.keys(DevnetTokens).map(
  (token) => token.toLowerCase()
);
export const CUSTOM_SPL_TOKENS = Object.keys(CustomTokens).map(
  (token) => token.toLowerCase() as CustomTokens
);

export const MAINNET_TOKENS: Record<MainnetTokens, TokenMetadata> = {
  [MainnetTokens.SOL]: {
    symbol: "◎",
    address: "So11111111111111111111111111111111111111112",
    image: TokenImageURLs.SOL,
  },
  [MainnetTokens.USDC]: {
    symbol: "$",
    address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    image: TokenImageURLs.USDC,
  },
  [MainnetTokens.SAMO]: {
    symbol: "SAMO",
    address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    image: TokenImageURLs.SAMO,
  },
  [MainnetTokens.DUST]: {
    symbol: "DUST",
    address: "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
    image: TokenImageURLs.DUST,
  },
  [MainnetTokens.SHDW]: {
    symbol: "SHDW",
    address: "SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y",
    image: TokenImageURLs.SHDW,
  },
  [MainnetTokens.BONK]: {
    symbol: "BONK",
    address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    image: TokenImageURLs.BONK,
  },
  [MainnetTokens.USDT]: {
    symbol: "USDT",
    address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    image: TokenImageURLs.USDT,
  },
  [MainnetTokens.PROSPERA]: {
    symbol: "PTC",
    address: "jkbtzaAgMtPq3AdUQ8sjbD5jMqzDxTnZTdB67u4Rmw4",
    image: TokenImageURLs.PROSPERA,
  },
  [MainnetTokens.HNT]: {
    symbol: "HNT",
    address: "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux",
    image: TokenImageURLs.HNT,
  },
  [MainnetTokens.ISC]: {
    symbol: "ISC",
    address: "J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD",
    image: TokenImageURLs.ISC,
  },
};

export const DEVNET_TOKENS: Record<DevnetTokens, TokenMetadata> = {
  [DevnetTokens.SOL]: {
    symbol: "◎",
    address: "So11111111111111111111111111111111111111112",
    image: TokenImageURLs.SOL,
  },
  [DevnetTokens.USDC]: {
    symbol: "$",
    address: "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr",
    image: TokenImageURLs.USDC,
  },
};

export const CUSTOM_TOKENS: Record<CustomTokens, CustomTokenMetadata> = {
  [CustomTokens.PROSPERA]: {
    symbol: "PTC",
    address: "jkbtzaAgMtPq3AdUQ8sjbD5jMqzDxTnZTdB67u4Rmw4",
    image: TokenImageURLs.PROSPERA,
    price: 1,
  },
};