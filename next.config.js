
module.exports = {
  reactStrictMode: true,
  redirects: async function redirect() {
    return [
      {
        source: '/juma',
        destination: '/shanba',
        permanent: false,
      },
    ]
  },
}
