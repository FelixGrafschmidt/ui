import { defineNuxtModule, createResolver, addComponent, installModule } from "@nuxt/kit";
import { presetWind, transformerDirectives } from "unocss";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "ui.felgraf.dev",
		configKey: "ui.felgraf.dev",
	},
	// Default configuration options of the Nuxt module
	defaults: {},
	async setup(_, nuxt) {
		const { resolve } = createResolver(import.meta.url);

		await installModule("@unocss/nuxt", {
			shortcuts: [],
			rules: [],
			presets: [presetWind()],
			transformers: [transformerDirectives()],
		});
		await installModule("nuxt-icon");

		nuxt.hook("prepare:types", ({ references }) => {
			references.push(
				{ path: resolve("runtime/components/Button.vue.d.ts") },
				{ path: resolve("runtime/components/Container.vue.d.ts") }
			);
		});
		// From the runtime directory
		addComponent({
			name: "FGButton",
			filePath: resolve("runtime/components/Button.vue"),
		});
		addComponent({
			name: "FGContainer",
			filePath: resolve("runtime/components/Container.vue"),
		});
	},
});
