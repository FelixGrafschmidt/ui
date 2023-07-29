<template>
	<component :is="as" :class="classes" class="mx-2 h-fit p-2">
		<slot />
	</component>
</template>

<script setup lang="ts">
	import { computed } from "vue";

	interface Props {
		maxwidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | undefined;
		maxheight?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | undefined;
		bgcolor?: "gray-1" | "gray-2" | "gray-3" | "gray-4" | "gray-5" | "gray-6" | "gray-7" | "gray-8" | "gray-9";
		as?: keyof HTMLElementTagNameMap;
		fullwidth?: boolean;
	}

	const props = withDefaults(defineProps<Props>(), {
		maxwidth: undefined,
		as: "div",
		maxheight: undefined,
		bgcolor: "gray-7",
	});

	const maxwidth = computed(() =>
		props.maxwidth
			? {
					xs: "max-w-xs",
					sm: "max-w-sm",
					md: "max-w-md",
					lg: "max-w-lg",
					xl: "max-w-xl",
					"2xl": "max-w-2xl",
					"3xl": "max-w-3xl",
					"4xl": "max-w-4xl",
					"5xl": "max-w-5xl",
					"6xl": "max-w-6xl",
					"7xl": "max-w-7xl",
			  }[props.maxwidth]
			: ""
	);
	const maxheight = computed(() =>
		props.maxheight
			? {
					xs: "max-h-xs",
					sm: "max-h-sm",
					md: "max-h-md",
					lg: "max-h-lg",
					xl: "max-h-xl",
					"2xl": "max-h-2xl",
					"3xl": "max-h-3xl",
					"4xl": "max-h-4xl",
					"5xl": "max-h-5xl",
					"6xl": "max-h-6xl",
					"7xl": "max-h-7xl",
			  }[props.maxheight]
			: ""
	);

	const width = computed(() => {
		return props.fullwidth ? "w-full" : "w-fit";
	});

	const scrolling = computed(() => {
		return [props.maxheight ? "overflow-y-auto" : "overflow-y-hidden", props.maxwidth ? "overflow-x-auto" : "overflow-x-hidden"].join(
			" "
		);
	});

	const color = computed(() => {
		return {
			"gray-1": "bg-gray-1 text-gray-9",
			"gray-2": "bg-gray-2 text-gray-9",
			"gray-3": "bg-gray-3 text-gray-9",
			"gray-4": "bg-gray-4 text-gray-9",
			"gray-5": "bg-gray-5 text-gray-1",
			"gray-6": "bg-gray-6 text-gray-1",
			"gray-7": "bg-gray-7 text-gray-1",
			"gray-8": "bg-gray-8 text-gray-1",
			"gray-9": "bg-gray-9 text-gray-1",
		}[props.bgcolor];
	});

	const classes = computed(() => {
		return [maxwidth.value, maxheight.value, scrolling.value, width.value, color.value].join(" ");
	});
</script>
