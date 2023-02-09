export type TTokens = "sol" | "usdc" | "shdw" | "dust";

export interface IMethods {
  activeMethod: TTokens;
  setActiveMethod: (method: TTokens) => void;
}

export interface IMethodProps {
  activeMethod: TTokens;
  setActiveMethod: (method: TTokens) => void;
  method: TTokens;
}

export * from "./Context";
export * from "./props";
export * from "./intent";
