/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/message',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
