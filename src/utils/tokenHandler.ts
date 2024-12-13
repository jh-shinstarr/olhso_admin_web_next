import { CognitoUserSession } from "amazon-cognito-identity-js";
import axios from "axios";

axios.defaults.baseURL = process.env.EXPO_PUBLIC_API_URL;

export const setToken = (session: CognitoUserSession) => {
   if (!session) return false;
   localStorage.setItem("@id_token", session.getIdToken().getJwtToken());
   localStorage.setItem(
      "@access_token",
      session.getAccessToken().getJwtToken()
   );
   localStorage.setItem("@refresh_token", session.getRefreshToken().getToken());
   return setAxiosHeaderAuth();
};

export const getAuthHeader = () => {
   const idToken = localStorage.getItem("@id_token");
   const accessToken = localStorage.getItem("@access_token");
   const refreshToken = localStorage.getItem("@refresh_token");
   return { accessToken, refreshToken, idToken };
};

export const clearAuthHeader = async () => {
   localStorage.clear();
   axios.defaults.headers.common.Authorization = undefined;
};

export const setAxiosHeaderAuth = () => {
   const idToken = localStorage.getItem("@id_token");
   if (!idToken) return false;
   axios.defaults.headers.common.Authorization = idToken;
   return true;
};

// refresh token이 재기능을 하는지 확인
// export const checkToken = async (session: CognitoUserSession) => {
//    const { accessToken, refreshToken, idToken } =  getAuthHeader();
//    const isEqualRefreshToken =
//       session.getRefreshToken().getToken() === refreshToken;
//    const isEqualIdToken = session.getIdToken().getJwtToken() === idToken;
//    const isEqualAccessToken =
//       session.getAccessToken().getJwtToken() === accessToken;
//    const message = `isEqualRefreshToken: ${isEqualRefreshToken} \n isEqualIdToken: ${isEqualIdToken} isEqualAccessToken: ${isEqualAccessToken}`;
//    alert(message);
// };
