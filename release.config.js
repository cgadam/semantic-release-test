module.exports = {
  branch: 'master',
  repositoryUrl: 'git@github.com:cgadam/semantic-release-test.git',
  tagFormat: 'version-{$version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ],
};
