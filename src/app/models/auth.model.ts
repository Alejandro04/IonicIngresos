export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
