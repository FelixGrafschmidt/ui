<template>
	<div></div>
</template>

<script lang="ts" setup>
	import { createGenerator, type UserConfig } from "unocss";

	const requiredThemeShades = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "DEFAULT"] as const;

	const props = defineProps<{
		unocssConfig: UserConfig<object>;
	}>();

	const appConfig = useAppConfig();
	const requiredThemeColors = Object.keys(appConfig["fg-theme"]);

	type ColorValue = string | Colors;

	interface Colors {
		[key: string]: ColorValue;
	}

	type ThemeKey = keyof (typeof appConfig)["fg-theme"];

	async function initTheme(): Promise<Record<ThemeKey, Record<keyof typeof requiredThemeShades, string>>> {
		const ctx = await createGenerator(props.unocssConfig);
		const themeColors = (ctx.config.theme as { colors: Colors }).colors;

		const result = Object.fromEntries(requiredThemeColors.map((colorName) => [colorName, {}])) as Record<
			ThemeKey,
			Record<keyof typeof requiredThemeShades, string>
		>;

		for (const colorName of requiredThemeColors) {
			const colorKey = appConfig["fg-theme"][colorName as ThemeKey];
			const color = themeColors[colorKey];
			if (typeof color === "string") {
				throw new Error(`Theme color "${colorKey}" is not an object`);
			}

			const colorKeys = Object.keys(color);
			const missingShades = requiredThemeShades.filter((shade) => !colorKeys.includes(shade));
			if (missingShades.length) {
				throw new Error(
					`Theme color "${colorKey}" is missing "${missingShades.join('", "')}" ${missingShades.length > 1 ? "shades" : "shade"}`
				);
			}
			result[colorName as ThemeKey] = color as Record<keyof typeof requiredThemeShades, string>;
		}
		return result;
	}

	const theme = await initTheme();

	useHead(() => ({
		bodyAttrs: {
			style: Object.entries(theme).reduce(
				(acc, [colorName, colorShades]) => {
					Object.entries(colorShades).forEach(([shade, value]) => {
						acc[`--fg-${colorName}-${shade}`] = value;
					});
					return acc;
				},
				{} as Record<string, string>
			),
		},
	}));
</script>

<style>
	body {
		@apply bg-primary-4;
	}
</style>
