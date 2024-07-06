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
	compatibilityDate: "2024-07-06",
	experimental: {
		asyncContext: true,
	},
});
