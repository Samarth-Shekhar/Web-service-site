/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';

// If running in GitHub Actions, set the basePath to the repository name
if (isGithubActions) {
  repo = '/Web-service-site';
}

const nextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true, // Required for static HTML export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  }
};

export default nextConfig;
