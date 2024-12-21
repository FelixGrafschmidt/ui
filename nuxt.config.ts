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
	hooks: {
		// "unocss:config": (config: UserConfig) => {
		// 	config.safelist = config.safelist?.concat(["bg-primary"]);
		// },
		// "app:resolve": (app) => {},
		// ready: (nuxt) => {
		// 	console.log(nuxt);
		// },
	},
});
