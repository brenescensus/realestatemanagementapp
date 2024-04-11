// import type { NextConfig } from 'next';

/** @type  { import ('next').NextConfig} */

const  NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname:"**",
            port:""

        }

    ]
  },
};  

module.exports = NextConfig;