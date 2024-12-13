import type { NextConfig } from "next";
import { config } from "dotenv";
import { resolve } from "path";
console.log(
   `*****  This is the next.config.ts file. NODE_ENV: '${process.env.NODE_ENV}' and ENVIRONMENT: '${process.env.ENVIRONMENT}'`
);

const envFile = `.env.${
   process.env.ENVIRONMENT === "production"
      ? "production"
      : process.env.ENVIRONMENT === "staging"
      ? "staging"
      : "dev"
}`;

config({ path: resolve(process.cwd(), envFile) });

const nextConfig: NextConfig = {
   /* config options here */
   reactStrictMode: true,
};

export default nextConfig;
