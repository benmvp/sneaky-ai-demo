import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        destination: '/writing-assistant',
        permanent: true,
        source: '/',
      },
    ]
  },
}

export default nextConfig
