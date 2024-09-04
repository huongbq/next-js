export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface ILoginAndRefreshResponse {
  token: string;
  refreshToken: string;
  accessTokenExpire: number;
  refreshTokenExpiry: number;
}
