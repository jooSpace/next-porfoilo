/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost", "*",
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com"
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
