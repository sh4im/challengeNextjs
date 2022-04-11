/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    secret: "This is my secrety you can change it by any other string you want",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
