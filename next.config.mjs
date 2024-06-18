/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn2.hubspot.net",
                port: "",
                pathname: "/hubfs/242200/**"
            },
            {
                protocol: "https",
                hostname: "zeroagency.ru",
                port: "",
                pathname: "/_next/image/**"
            }
        ]
    }
};

export default nextConfig;
