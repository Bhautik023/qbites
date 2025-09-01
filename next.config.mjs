/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    async rewrites() {
        return [
            {
                source: "/proxy/brochures/:path*",
                destination:
                    "https://srv733641.hstgr.cloud:22443/brochures/:path*",
            },
        ];
    },
};

export default nextConfig;
