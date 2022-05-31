/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_BACKEND2: "https://jsonplaceholder.typicode.com/",
    IMAGE_URL: "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/create-pin",
        destination: "/auth/pin",
      },
    ];
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
