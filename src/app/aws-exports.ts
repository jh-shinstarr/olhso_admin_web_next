const awsConfig = {
   Auth: {
      userPoolId: process.env.USER_POOL_ID || "",
      userPoolWebClientId: "YOUR_APP_CLIENT_ID",
   },
};

export default awsConfig;
