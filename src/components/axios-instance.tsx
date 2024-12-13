"use client";

import { getNewRefreshTokenData } from "@/utils/cognito";
import { setToken } from "@/utils/tokenHandler";
import axios from "axios";
import React, { useEffect } from "react";

const AxiosInstance = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   const isTokenExpired = (token: string | null) => {
      if (!token) {
         console.error("No Token!");
         return false;
      }
      try {
         const payloadBase64 = token.split(".")[1];
         const decodedPayload = JSON.parse(atob(payloadBase64));

         const currentTime = Math.floor(Date.now() / 1000);
         return decodedPayload.exp < currentTime;
      } catch (error) {
         console.error("token parsing error:", error);
         return true;
      }
   };

   useEffect(() => {
      axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      if (typeof window !== "undefined") {
         const token = localStorage.getItem("@id_token");
         if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
         }
      }
      const requestInterceptor = axios.interceptors.request.use(
         (config) => {
            if (typeof window !== "undefined") {
               const token = localStorage.getItem("@id_token");
               if (isTokenExpired(token)) {
                  const refreshToken = localStorage.getItem("@refresh_token");
                  if (!refreshToken) {
                     console.error("리프레시 토큰이 없습니다.");
                     return config;
                  }
                  getNewRefreshTokenData(refreshToken)
                     .then((session) => {
                        setToken(session);
                     })
                     .catch((error) => {
                        console.error(
                           "리프레시 토큰으로 세션을 가져오는 중 에러 발생:",
                           error
                        );
                     });
               }
            }
            return config;
         },
         (error) => Promise.reject(error)
      );

      const responseInterceptor = axios.interceptors.response.use(
         (response) => response,
         (error) => {
            if (error.response?.status === 401) {
               console.error("인증 실패: 로그인 페이지로 이동합니다.");
               // if (typeof window !== "undefined") {
               //    window.location.href = "/main";
               // }
               console.log(error);
            }
            return Promise.reject(error);
         }
      );

      return () => {
         axios.interceptors.request.eject(requestInterceptor);
         axios.interceptors.response.eject(responseInterceptor);
      };
   }, []);

   return <div>{children}</div>;
};

export default AxiosInstance;
