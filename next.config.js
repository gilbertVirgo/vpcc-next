/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "components")],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
