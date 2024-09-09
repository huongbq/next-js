import {
  SignInData,
  SignUpData,
  ILoginAndRefreshResponse,
  IRegisterResponse,
} from "@/types/auth.type";
import axiosInstance from "@/utils/axiosInstance";

const AuthServices = {
  async signIn(data: SignInData) {
    return await axiosInstance.post<ILoginAndRefreshResponse>(
      "/api/auth/sign-in",
      data
    );
  },
  signUp(body: SignUpData): Promise<IRegisterResponse> {
    return axiosInstance.post("/api/auth/sign-up", body);
  },
};

export default AuthServices;
