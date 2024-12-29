import { presetScrollbar } from "unocss-preset-scrollbar";
import { transformerDirectives, presetUno, defineConfig, type SafeListContext, type RuleContext } from "unocss";

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
			foo: {
				DEFAULT: "#FF0000",
				100: "#990000",
				200: "#770000",
				300: "#550000",
				400: "#330000",
			},
		},
	},
	transformers: [transformerDirectives()],
	safelist: [(config) => generateSafelist(config)],
});

function generateSafelist(config: SafeListContext<object>) {
	debugger;
	const result: string[] = [];
	if (Array.isArray(config.generator.userConfig.shortcuts)) {
		config.generator.userConfig.shortcuts.forEach((shortcut) => {
			// Limit the process to shortcuts defined in this layer
			if (!(shortcut[0] instanceof RegExp)) {
				return;
			}
			const shortcutName = shortcut[0].source.replace(/\^(.*)\$/, "$1");
			if (!shortcutName.startsWith("fg-")) {
				return;
			}
			if (typeof shortcut[1] === "function") {
				const theme = config.generator.userConfig.theme as { colors: Colors };
				function generateColors(obj: Colors, prefix = ""): string[] {
					const result: string[] = [];
					for (const key in obj) {
						const value = obj[key];
						if (typeof value === "string") {
							if (key === "DEFAULT") {
								result.push(prefix.slice(0, -1));
							}
							result.push(`${prefix}${key}`);
						} else {
							result.push(...generateColors(value, `${prefix}${key}-`));
						}
					}
					return result;
				}
				const colors = generateColors(theme.colors);
				for (const color of colors) {
					const shortcutValue = shortcut[1](["", color], {} as Readonly<RuleContext<object>>);
					if (typeof shortcutValue === "string") {
						result.push(shortcutValue);
					}

					result.push(shortcutName.replace(/\(\.\*\)/, color));
				}
			}
		});
	}

	return result;
}
