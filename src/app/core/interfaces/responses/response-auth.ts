export interface ResponseAuth {
  name?: string;
  token: string;
  tokens?: Tokens;
}

export interface Tokens {
  accessToken: string;
}
