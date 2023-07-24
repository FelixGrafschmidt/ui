<template>
	<component
		:is="to ? 'a' : 'button'"
		:target="target"
		:href="to"
		:disabled="props.disabled"
		class="flex flex-row cursor-pointer items-center justify-between gap-1 border"
		:class="classes"
		@click="to ? undefined : $emit('click', $event)"
	>
		<Icon v-if="leadingIcon || (icon && !trailing)" :name="leadingIcon || icon" />
		<slot v-else name="leading" />
		<div v-if="loading" :class="loadingClasses" />
		<template v-else>
			<span v-if="label">{{ label }}</span>
			<slot v-else />
		</template>

		<Icon v-if="trailingIcon || (icon && trailing)" :name="trailingIcon || icon" />
		<slot v-else name="trailing" />
	</component>
</template>

<script setup lang="ts">
	// TODO: Loading
	import {} from "nuxt-icon";

	export type Color = "teal" | "green" | "red" | "gray" | "black" | "white";
	export type Variant = "solid" | "outline" | "ghost" | "link";
	export type Size = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
	interface Props {
		label?: string;
		color?: Color;
		variant?: Variant;
		size?: Size;
		icon?: string;
		leadingIcon?: string;
		trailingIcon?: string;
		trailing?: boolean;
		disabled?: boolean;
		loading?: boolean;
		block?: boolean;
		padded?: boolean;
		to?: string | URL;
		round?: boolean;
		target?: "_self" | "_blank" | "_parent" | "_top";
	}

	const props = withDefaults(defineProps<Props>(), {
		label: undefined,
		color: "gray",
		variant: "solid",
		size: "md",
		icon: undefined,
		leadingIcon: undefined,
		trailingIcon: undefined,
		padded: true,
		to: undefined,
		target: undefined,
		leading: true,
	});

	defineEmits<{ click: [value: PointerEvent] }>();

	const sizes: Record<Size, string> = {
		sm: "h-5 text-xs",
		md: "h-6 text-sm",
		lg: "h-7 text-base",
		xl: "h-8 text-lg",
		"2xl": "h-9 text-xl",
		"3xl": "h-10 text-2xl",
	};

	const variants: Record<Variant, string> = {
		solid: "",
		outline: "",
		ghost: "",
		link: "",
	};

	const colors: Record<Color, Record<Variant, string>> = {
		teal: {
			ghost: "focus:outline bg-transparent border-transparent text-teal hover:bg-teal-9",
			link: "bg-transparent border-transparent text-teal hover:text-teal-6 hover:underline hover:underline-solid hover:underline-teal-6",
			outline: "focus:outline bg-transparent border-teal text-teal hover:bg-teal-9",
			solid: "focus:outline bg-teal hover:bg-teal-1  text-gray-8 border-teal",
		},
		green: {
			ghost: "focus:outline bg-transparent border-transparent text-green hover:bg-green-9",
			link: "bg-transparent border-transparent text-green hover:text-green-6 hover:underline hover:underline-solid hover:underline-green-6",
			outline: "focus:outline bg-transparent border-green text-green hover:bg-green-9",
			solid: "focus:outline bg-green hover:bg-green-2  text-gray-8 border-green",
		},
		white: {
			ghost: "focus:outline bg-transparent border-transparent text-white hover:bg-gray-5",
			link: "bg-transparent border-transparent text-white hover:text-gray-2 hover:underline hover:underline-solid hover:underline-gray-2",
			outline: "focus:outline bg-transparent border-white text-white hover:bg-gray-5",
			solid: "focus:outline bg-white hover:bg-gray-2  text-gray-8 border-white",
		},
		gray: {
			ghost: "focus:outline bg-transparent border-transparent text-gray hover:bg-gray-9",
			link: "bg-transparent border-transparent text-gray hover:text-gray-5 hover:underline hover:underline-solid hover:underline-gray-5",
			outline: "focus:outline bg-transparent border-gray text-gray hover:bg-gray-9",
			solid: "focus:outline bg-gray hover:bg-gray-3  text-gray-8 border-gray",
		},
		red: {
			ghost: "focus:outline bg-transparent border-transparent text-red hover:bg-red-9",
			link: "bg-transparent border-transparent text-red hover:text-red-6 hover:underline hover:underline-solid hover:underline-red-6",
			outline: "focus:outline bg-transparent border-red text-red hover:bg-red-9",
			solid: "focus:outline bg-red hover:bg-red-3  text-gray-1 border-red",
		},
		black: {
			ghost: "focus:outline bg-transparent border-transparent text-black hover:bg-gray-6",
			link: "bg-transparent border-transparent text-black hover:text-gray-8 hover:underline hover:underline-solid hover:underline-gray-8",
			outline: "focus:outline bg-transparent border-black text-black hover:bg-gray-6",
			solid: "focus:outline bg-black hover:bg-gray-8  text-gray-2 border-black",
		},
	};

	const padding = props.padded ? "px-2" : "px-0";

	const width = props.block ? "w-full" : "w-fit";

	const disabled = props.disabled ? "grayscale-50 pointer-events-none" : "";

	const rounded = props.round ? "rounded-full" : "rounded";

	const classes = computed(() => {
		return [sizes[props.size], variants[props.variant], colors[props.color][props.variant], padding, width, disabled, rounded].join(
			" "
		);
	});

	const loadingClasses = computed(() => {
		const base =
			"inline-block after:m-2 after:block after:animate-[lds-dual-ring_1.2s_linear_infinite] after:rounded-1/2 after:content-['_']";
		const size = {
			sm: "after:h-4 after:w-4 after:border-2",
			md: "after:h-4 after:w-4 after:border-2",
			lg: "after:h-6 after:w-6 after:border-2",
			xl: "after:h-6 after:w-6 after:border-2",
			"2xl": "after:h-8 after:w-8 after:border-2",
			"3xl": "after:h-8 after:w-8 after:border-2",
		}[props.size];
		const color = {
			teal: {
				ghost: "after:border-color-[#2dd4bf_transparent_#2dd4bf_transparent]",
				link: "after:border-color-[#2dd4bf_transparent_#2dd4bf_transparent]",
				outline: "after:border-color-[#2dd4bf_transparent_#2dd4bf_transparent]",
				solid: "after:border-color-[#1f2937_transparent_#1f2937_transparent]",
			},
			green: {
				ghost: "after:border-color-[#4ade80_transparent_#4ade80_transparent]",
				link: "after:border-color-[#4ade80_transparent_#4ade80_transparent]",
				outline: "after:border-color-[#4ade80_transparent_#4ade80_transparent]",
				solid: "after:border-color-[#1f2937_transparent_#1f2937_transparent]",
			},
			red: {
				ghost: "after:border-color-[#f87171_transparent_#f87171_transparent]",
				link: "after:border-color-[#f87171_transparent_#f87171_transparent]",
				outline: "after:border-color-[#f87171_transparent_#f87171_transparent]",
				solid: "after:border-color-[#f3f4f6_transparent_#f3f4f6_transparent]",
			},
			gray: {
				ghost: "after:border-color-[#9ca3af_transparent_#9ca3af_transparent]",
				link: "after:border-color-[#9ca3af_transparent_#9ca3af_transparent]",
				outline: "after:border-color-[#9ca3af_transparent_#9ca3af_transparent]",
				solid: "after:border-color-[#1f2937_transparent_#1f2937_transparent]",
			},
			black: {
				ghost: "after:border-color-[#000_transparent_#000_transparent]",
				link: "after:border-color-[#000_transparent_#000_transparent]",
				outline: "after:border-color-[#000_transparent_#000_transparent]",
				solid: "after:border-color-[#e5e7eb_transparent_#e5e7eb_transparent]",
			},
			white: {
				ghost: "after:border-color-[#fff_transparent_#fff_transparent]",
				link: "after:border-color-[#fff_transparent_#fff_transparent]",
				outline: "after:border-color-[#fff_transparent_#fff_transparent]",
				solid: "after:border-color-[#1f2937_transparent_#1f2937_transparent]",
			},
		}[props.color][props.variant];
		return [base, size, color].join(" ");
	});
</script>

<style>
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
