import { presetScrollbar } from "unocss-preset-scrollbar";
import { transformerDirectives, presetUno, defineConfig } from "unocss";

type ColorValue = string | Colors;

interface Colors {
	[key: string]: ColorValue;
}

export default defineConfig({
	// presets

	// core options
	rules: [],
	presets: [
		presetUno(),
		presetScrollbar({
			// config
		}),
	],
	theme: {
		colors: {
			primary: {
				DEFAULT: "var(--fg-primary-DEFAULT)",
				1: "var(--fg-primary-1)",
				2: "var(--fg-primary-2)",
				3: "var(--fg-primary-3)",
				4: "var(--fg-primary-4)",
				5: "var(--fg-primary-5)",
				6: "var(--fg-primary-6)",
				7: "var(--fg-primary-7)",
				8: "var(--fg-primary-8)",
				9: "var(--fg-primary-9)",
			},
			secondary: {
				DEFAULT: "var(--fg-secondary-DEFAULT)",
				1: "var(--fg-secondary-1)",
				2: "var(--fg-secondary-2)",
				3: "var(--fg-secondary-3)",
				4: "var(--fg-secondary-4)",
				5: "var(--fg-secondary-5)",
				6: "var(--fg-secondary-6)",
				7: "var(--fg-secondary-7)",
				8: "var(--fg-secondary-8)",
				9: "var(--fg-secondary-9)",
			},
			tertiary: {
				DEFAULT: "var(--fg-tertiary-DEFAULT)",
				1: "var(--fg-tertiary-1)",
				2: "var(--fg-tertiary-2)",
				3: "var(--fg-tertiary-3)",
				4: "var(--fg-tertiary-4)",
				5: "var(--fg-tertiary-5)",
				6: "var(--fg-tertiary-6)",
				7: "var(--fg-tertiary-7)",
				8: "var(--fg-tertiary-8)",
				9: "var(--fg-tertiary-9)",
			},
			gray: {
				DEFAULT: "var(--fg-gray-DEFAULT)",
				1: "var(--fg-gray-1)",
				2: "var(--fg-gray-2)",
				3: "var(--fg-gray-3)",
				4: "var(--fg-gray-4)",
				5: "var(--fg-gray-5)",
				6: "var(--fg-gray-6)",
				7: "var(--fg-gray-7)",
				8: "var(--fg-gray-8)",
				9: "var(--fg-gray-9)",
			},
		},
	},
	transformers: [transformerDirectives()],
});
