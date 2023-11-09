/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "components")],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	async redirects() {
		return [
			{
				source: "/carols",
				destination: "/",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
