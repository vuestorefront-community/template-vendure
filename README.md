<div align="center">
<img src="https://blog.vuestorefront.io/wp-content/uploads/2020/01/1QU9F6hQlFyHsJIbsdmt6FA.png" height="80px"/>  <img src="https://www.vendure.io/logo.png" height="100px" style="margin-left: 30px;">
</div>

# Vendure theme

### Vue Storefront 2 integration with Vendure

> This integration is under development

This project is a Vendure integration for [Vue Storefront 2](https://github.com/vuestorefront/vue-storefront/). Checkout [docs](docs.vuestorefront.io/vendure/) for instructions on how to setup the project.

### Requirements

- NodeJS v14 or later
- Vendure server running in localhost for GraphQL API or <https://demo.vendure.io/shop-api>
- Set up auth options in Vendure server

```ts
// vendure-config.ts
...
  authOptions: {
    tokenMethod: 'bearer', // authorization header method
    requireVerification: false, // disable register by email verification
  },
```

### Build Setup

```bash
# copy example environment variable file to use in the project
cp .env.example .env
```

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3001
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [Vendure integration Documentation](https://docs.vuestorefront.io/vendure)
- [Vendure Documentation](https://www.vendure.io/docs/)
- [Community Chat](https://discord.vuestorefront.io)

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contributors ✨

Thanks go to these wonderful people 🙌:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Baroshem"><img src="https://avatars.githubusercontent.com/u/37120330?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Jakub Andrzejewski</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=Baroshem" title="Code">💻</a> <a href="#maintenance-Baroshem" title="Maintenance">🚧</a> <a href="#projectManagement-Baroshem" title="Project Management">📆</a> <a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=Baroshem" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rafagarcialepper.com/"><img src="https://avatars.githubusercontent.com/u/73605?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Rafael Garcia Lepper</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=rglepper" title="Code">💻</a></td>
    <td align="center"><a href="http://www.michaelbromley.co.uk/"><img src="https://avatars.githubusercontent.com/u/6275952?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Michael Bromley</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/pulls?q=is%3Apr+reviewed-by%3Amichaelbromley" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
