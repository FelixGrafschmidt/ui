import { presetScrollbar } from "unocss-preset-scrollbar";
import { transformerDirectives, presetUno, defineConfig, type SafeListContext } from "unocss";

type ColorValue = string | Colors;

interface Colors {
	[key: string]: ColorValue;
}

export default defineConfig({
	// presets

	// core options
	shortcuts: [[/^fg-bg-(.*)$/, ([, c]) => `bg-${c}`]],
	rules: [],
	presets: [
		presetUno(),
		presetScrollbar({
			// config
		}),
	],
	theme: {
		colors: {
			foo: "#000000",
		},
	},
	transformers: [transformerDirectives()],
	safelist: [(config) => generateSafelist(config)],
});

function generateSafelist(config: SafeListContext<object>) {
	const result: string[] = [];
	if (Array.isArray(config.generator.userConfig.shortcuts)) {
		config.generator.userConfig.shortcuts.forEach((shortcut) => {
			if (typeof shortcut[1] === "function") {
				const theme = config.generator.userConfig.theme as { colors: Colors };
				function generateColors(obj: Colors, prefix = ""): string[] {
					const result: string[] = [];
					for (const key in obj) {
						const value = obj[key];
						if (typeof value === "string") {
							result.push(`${prefix}${key}`);
						} else {
							result.push(...generateColors(value, `${prefix}${key}-`));
						}
					}
					return result;
				}
				const colors = generateColors(theme.colors);
				for (const color of colors) {
					debugger;
					const shortcutValue = shortcut[1](["", color], {});
					if (typeof shortcutValue === "string") {
						result.push(shortcutValue);
					}

					if (shortcut[0] instanceof RegExp) {
						const regex = shortcut[0] as RegExp;
					}
				}
			}
		});
	}
	console.log(result);

	return result;
}
