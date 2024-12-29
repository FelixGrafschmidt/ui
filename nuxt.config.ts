export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	modules: ["@unocss/nuxt", "@nuxt/icon", "@vueuse/nuxt", "@nuxt/eslint"],
	vite: {},
	experimental: {
		asyncContext: true,
	},
	compatibilityDate: "2024-07-06",
	hooks: {},
});
