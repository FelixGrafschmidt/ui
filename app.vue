<template>
	<div class="flex flex-col gap-2">
		<FGButton label="Change color" @click="switchColor" />
	</div>
</template>

<script setup lang="ts">
	import unoCssConfig from "./unocss.config";

	type ColorValue = string | Colors;

	interface Colors {
		[key: string]: ColorValue;
	}

	const config = useAppConfig();

	const theme = unoCssConfig.theme as { colors: Colors };

	const primaryColor = config.theme.primary;
	function switchColor() {
		document.body.style.setProperty("--fg-primary", "yellow");
	}

	useHead(() => ({
		bodyAttrs: {
			style: {
				"--fg-primary": theme.colors[primaryColor] as string,
			},
		},
	}));
</script>

<style>
	body {
		@apply bg-primary;
	}
</style>
