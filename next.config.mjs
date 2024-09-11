/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // Find the current repository name from GitHub Actions environment variables
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: "export", // Important for static export
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default nextConfig;
