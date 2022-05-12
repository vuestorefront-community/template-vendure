<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>  <img src="https://www.vendure.io/logo.png" height="100px" style="margin-left: 30px;">
</div>

### Stay connected

[![GitHub Repo stars](https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social)](https://github.com/vuestorefront/vue-storefront)
[![Twitter Follow](https://img.shields.io/twitter/follow/vuestorefront?style=social)](https://twitter.com/vuestorefront)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social)](https://www.youtube.com/c/VueStorefront)
[![Discord](https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white)](https://discord.vuestorefront.io)

# Vendure theme

### Vue Storefront 2 integration with Vendure

This project is a Vendure integration for [Vue Storefront 2](https://github.com/vuestorefront/vue-storefront/). Checkout [docs](docs.vuestorefront.io/vendure/) for instructions on how to setup the project.

### Requirements

- NodeJS v14 or later
- Vendure server running in localhost for GraphQL API or <https://demo.vendure.io/shop-api>
- Set up auth options in Vendure server (This functionality is available for those who scaffold a local instance of Vendure)

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
    <td align="center"><a href="https://fifciuu.com/"><img src="https://avatars.githubusercontent.com/u/30155292?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Filip Jędrasik</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/pulls?q=is%3Apr+reviewed-by%3AFifciu" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Mateuszpietrusinski"><img src="https://avatars.githubusercontent.com/u/24594740?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Mateusz Pietrusiński</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/pulls?q=is%3Apr+reviewed-by%3AMateuszpietrusinski" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/igorwojciechowski"><img src="https://avatars.githubusercontent.com/u/26794636?v=4?s=80" width="80px;" alt=""/><br /><sub><b>igorwojciechowski</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=igorwojciechowski" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://heitor.co/"><img src="https://avatars.githubusercontent.com/u/1626923?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Heitor Ramon Ribeiro</b></sub></a><br /><a href="#mentoring-bloodf" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://www.malimlin.si/"><img src="https://avatars.githubusercontent.com/u/302135?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Milan Zivkovic</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=zmilan" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Michaeldrm"><img src="https://avatars.githubusercontent.com/u/4975044?v=4?s=80" width="80px;" alt=""/><br /><sub><b>michael.douglas@outlook.com</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=Michaeldrm" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/justyna-13"><img src="https://avatars.githubusercontent.com/u/46591755?v=4?s=80" width="80px;" alt=""/><br /><sub><b>Justyna</b></sub></a><br /><a href="https://github.com/vuestorefront/@vuestorefront/vendure/commits?author=justyna-13" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
