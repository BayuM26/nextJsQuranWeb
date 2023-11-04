/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    distDir: 'dist',
    // dynamic: 'force-static',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
