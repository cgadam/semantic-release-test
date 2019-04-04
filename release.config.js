module.exports = {
  branch: 'master',
  repositoryUrl: 'git@github.com:cgadam/semantic-release-test.git',
  tagFormat: 'v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md",
      "changelogTitle": "Thirdlove Shopify Changelog",
    }],
    ["@semantic-release/npm", {
      "npmPublish": false,
    }],
    '@semantic-release/git',
    '@semantic-release/github'
  ],
};
