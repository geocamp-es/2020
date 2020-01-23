module.exports = {
  publicPath: process.env.GITHUB_ENV === 'development' ? '/' : '/2020',
  outputDir: 'docs'
}