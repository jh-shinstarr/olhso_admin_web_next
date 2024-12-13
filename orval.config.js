const environment = process.env.environment || "dev";

export default {
   "olhso-base-backend": {
      output: {
         target: "src/api/service",
         schemas: "src/api/model",
         mode: "tags-split",
      },
      input: `https://base-${environment}.olhso.com/olhso/docs-json`,
   },
};
