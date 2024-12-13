import {
   CognitoUserPool,
   CognitoUser,
   AuthenticationDetails,
   CognitoUserSession,
   CognitoRefreshToken,
} from "amazon-cognito-identity-js";

interface PoolData {
   UserPoolId: string;
   ClientId: string;
}

const poolData: PoolData = {
   UserPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID as string,
   ClientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
};

const userPool = new CognitoUserPool(poolData);

function logIn(
   username: string,
   password: string
): Promise<CognitoUserSession> {
   const authenticationData = {
      Username: username,
      Password: password,
   };

   const authenticationDetails = new AuthenticationDetails(authenticationData);
   const userData = {
      Username: username,
      Pool: userPool,
   };

   const cognitoUser = new CognitoUser(userData);

   return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
         onSuccess: (session) => resolve(session),
         onFailure: (err) => reject(err),
      });
   });
}

export function getNewRefreshTokenData(
   refreshTokenString: string | null
): Promise<CognitoUserSession> {
   const cognitoUser = userPool.getCurrentUser();
   if (cognitoUser == null)
      return Promise.reject(new Error("No user is currently authenticated."));

   if (!refreshTokenString)
      return Promise.reject(new Error("Refresh token is null"));

   const refreshToken = new CognitoRefreshToken({
      RefreshToken: refreshTokenString,
   });

   return new Promise<CognitoUserSession>((resolve, reject) => {
      cognitoUser.refreshSession(
         refreshToken,
         (err: Error | null, session: CognitoUserSession | null) => {
            if (err) {
               reject(err);
            } else if (session) {
               resolve(session);
            } else {
               reject(new Error("Session is null"));
            }
         }
      );
   });
}

export default logIn;
