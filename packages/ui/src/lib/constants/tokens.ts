export enum MainnetTokens {
  SOL = "SOL",
  USDC = "USDC",
  SAMO = "SAMO",
  DUST = "DUST",
  SHDW = "SHDW",
  BONK = "BONK",
  BSOL = "BSOL",
}
export enum DevnetTokens {
  SOL = "SOL",
  USDC = "USDC",
}

export enum TokenImageURLs {
  SOL = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540678/Vector_1_zxj0wf.png",
  USDC = "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513791/tokens-cp/usdc_s6cnic.png",
  SAMO = "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513792/tokens-cp/samo_sehxow.png",
  DUST = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540717/Group_12_mvmsno.png",
  SHDW = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1674382762/10B-S-Logomark_yfpjg9.png",
  BONK = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1672866132/bonk_uxksik.png",
  BSOL = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1674545342/image-proxy_rlrouk.png",
}

export interface TokenMetadata {
  symbol: string;
  address: string;
  image: string;
}

export const MAINNET_SUPPORTED_SPL_TOKENS = Object.keys(MainnetTokens).map(
  (token) => token.toLowerCase()
);
export const DEVNET_SUPPORTED_SPL_TOKENS = Object.keys(DevnetTokens).map(
  (token) => token.toLowerCase()
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
  [MainnetTokens.BSOL]: {
    symbol: "bSOL",
    address: "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
    image: TokenImageURLs.BSOL,
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
