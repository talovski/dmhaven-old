/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};
const withAstroturf = require('next-astroturf');

module.exports = withAstroturf(nextConfig);
