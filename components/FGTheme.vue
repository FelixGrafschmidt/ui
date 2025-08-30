<template>
  <div />
</template>

<script lang="ts" setup>
import type { UserConfig } from 'unocss';
import { createGenerator } from 'unocss';

const props = defineProps<{
  unocssConfig: UserConfig<object>
}>();

const requiredThemeShades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'DEFAULT'] as const;

const appConfig = useAppConfig();
const requiredThemeColors = Object.keys(appConfig['fg-theme']);

interface UnocssThemeColors {
  [key: string]: string
}

type AppConfigThemeKey = keyof (typeof appConfig)['fg-theme'];

async function initTheme(): Promise<Record<AppConfigThemeKey, Record<keyof typeof requiredThemeShades, string>>> {
  const ctx = await createGenerator(props.unocssConfig);
  const unocssThemeColors = (ctx.config.theme as { colors: UnocssThemeColors }).colors;

  const result = Object.fromEntries(requiredThemeColors.map(requiredThemeColorName => [requiredThemeColorName, {}])) as Record<
      AppConfigThemeKey,
      Record<keyof typeof requiredThemeShades, string>
    >;

  for (const requiredThemeColorName of requiredThemeColors) {
    const effectiveColorName = appConfig['fg-theme'][requiredThemeColorName as AppConfigThemeKey];
    const unocssColorObject = unocssThemeColors[effectiveColorName];
    if (typeof unocssColorObject === 'string') {
      throw new TypeError(`Theme color "${effectiveColorName}" is not an object`);
    }

    const unocssColorKeys = Object.keys(unocssColorObject);
    const missingShades = requiredThemeShades.filter(shade => !unocssColorKeys.includes(shade));
    if (missingShades.length) {
      throw new Error(
        `Theme color "${effectiveColorName}" is missing "${missingShades.join('", "')}" ${missingShades.length > 1 ? 'shades' : 'shade'}`,
      );
    }
    result[requiredThemeColorName as AppConfigThemeKey] = unocssColorObject as Record<keyof typeof requiredThemeShades, string>;
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
      {} as Record<string, string>,
    ),
  },
}));
</script>

<style>
  body {
    @apply bg-primary-4;
  }
</style>
