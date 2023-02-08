declare enum MainnetTokens {
    SOL = "SOL",
    USDC = "USDC",
    SAMO = "SAMO",
    DUST = "DUST",
    SHDW = "SHDW",
    BONK = "BONK",
    BSOL = "BSOL"
}
declare enum DevnetTokens {
    SOL = "SOL",
    USDC = "USDC"
}
declare enum TokenImageURLs {
    SOL = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540678/Vector_1_zxj0wf.png",
    USDC = "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513791/tokens-cp/usdc_s6cnic.png",
    SAMO = "https://res.cloudinary.com/ddum5vpp3/image/upload/v1671513792/tokens-cp/samo_sehxow.png",
    DUST = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540717/Group_12_mvmsno.png",
    SHDW = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1674382762/10B-S-Logomark_yfpjg9.png",
    BONK = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1672866132/bonk_uxksik.png",
    BSOL = "https://res.cloudinary.com/dtzqgftjk/image/upload/v1674545342/image-proxy_rlrouk.png"
}
interface TokenMetadata {
    symbol: string;
    address: string;
    image: string;
}
declare const MAINNET_SUPPORTED_SPL_TOKENS: string[];
declare const DEVNET_SUPPORTED_SPL_TOKENS: string[];
declare const MAINNET_TOKENS: Record<MainnetTokens, TokenMetadata>;
declare const DEVNET_TOKENS: Record<DevnetTokens, TokenMetadata>;

export { DEVNET_SUPPORTED_SPL_TOKENS, DEVNET_TOKENS, DevnetTokens, MAINNET_SUPPORTED_SPL_TOKENS, MAINNET_TOKENS, MainnetTokens, TokenImageURLs, TokenMetadata };
