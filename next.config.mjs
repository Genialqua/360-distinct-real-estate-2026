// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ["cdn.sanity.io"], // ✅ add Sanity's CDN
    unoptimized: false,         // optional: disables optimization (not recommended)
  },
}

export default nextConfig





// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//       },
//     ],
//   },
// }

// export default nextConfig

