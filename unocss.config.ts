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
			// foo: {
			// 	DEFAULT: "#FF0000",
			// 	100: "#990000",
			// 	200: "#770000",
			// 	300: "#550000",
			// 	400: "#330000",
			// },
			"fg-brand": "#ffff00",
			primary: "var(--fg-primary, green)",
		},
	},
	transformers: [transformerDirectives()],
});
