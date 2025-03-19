import { productionCdnPrefix } from './cdn-cofig.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	assetPrefix:
		process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true'
			? productionCdnPrefix
			: undefined,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
