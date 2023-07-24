<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: ui.felgraf.dev
- Package name: ui.felgraf.dev
- Description: UI library for my projects
-->

# ui.felgraf.dev

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

UI library for my projects

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

## Quick Setup

1. Add `ui.felgraf.dev` dependency to your project

```bash
# Using pnpm
pnpm add -D ui.felgraf.dev

# Using yarn
yarn add --dev ui.felgraf.dev

# Using npm
npm install --save-dev ui.felgraf.dev
```

2. Add `ui.felgraf.dev` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'ui.felgraf.dev'
  ]
})
```

That's it! You can now use ui.felgraf.dev in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/ui.felgraf.dev/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/ui.felgraf.dev

[npm-downloads-src]: https://img.shields.io/npm/dm/ui.felgraf.dev.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/ui.felgraf.dev

[license-src]: https://img.shields.io/npm/l/ui.felgraf.dev.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/ui.felgraf.dev

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
