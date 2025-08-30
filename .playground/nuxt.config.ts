export default defineNuxtConfig({
  extends: [['..', { install: true }]],
  modules: ['@nuxt/eslint'],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
