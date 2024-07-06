export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
	modules: ["@unocss/nuxt", "@nuxt/icon", "@vueuse/nuxt", "@nuxt/eslint"],
	vite: {},
	components: {
		global: true,
		dirs: ["~/components"],
	},
	experimental: {
		asyncContext: true,
	},
});
