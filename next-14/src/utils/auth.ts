import { jwtDecode } from "jwt-decode";

export const logout = (): void => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export function isAuthenticated() {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode(token) as any;
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        localStorage.removeItem("token");
        return false;
      }
      return true;
    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
  }
  return false;
}
