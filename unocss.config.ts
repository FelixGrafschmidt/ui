import { presetScrollbar } from "unocss-preset-scrollbar";
import { transformerDirectives, defineConfig, presetWind3 } from "unocss";

type ColorValue = string | Colors;

interface Colors {
	[key: string]: ColorValue;
}

export default defineConfig({
	// presets

	// core options
	rules: [],
	presets: [
		presetWind3(),
		presetScrollbar({
			// config
		}),
	],
	theme: {
		colors: {
			// slate
			gray: {
				50: "#f9fafb",
				100: "#f4f5f7",
				200: "#e5e7eb",
				300: "#d2d6dc",
				400: "#9fa6b2",
				500: "#6b7280",
				600: "#4b5563",
				700: "#374151",
				800: "#252f3f",
				900: "#161e2e",
			},
			// teal
			primary: {
				50: "#f0fdfa",
				100: "#ccfbf1",
				200: "#99f6e4",
				300: "#5eead4",
				400: "#2dd4bf",
				500: "#14b8a6",
				600: "#0d9488",
				700: "#0f766e",
				800: "#115e59",
				900: "#134e4a",
			},
		},
	},
	transformers: [transformerDirectives()],
});
