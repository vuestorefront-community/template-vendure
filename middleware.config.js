module.exports = {
  integrations: {
    vendure: {
      location: '@vue-storefront/vendure-api/server',
      configuration: {
        api: {
          uri: process.env.GRAPHQL_API,
          // to be used later with authentication
          tokenMethod: process.env.TOKEN_METHOD
        },
        currency: process.env.CURRENCY,
        lang: process.env.LANG
      }
    },
    sb: {
      location: '@vue-storefront/storyblok/server',
      configuration: {
        token: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory',
      },
    }
  }
};
