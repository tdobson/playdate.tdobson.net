import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
	reactStrictMode: true,
	output: "export",
	distDir: "out",
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
});
