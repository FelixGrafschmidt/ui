<template>
	<div :class="`${ui.wrapper} ${ui.background} ${ui.rounded} ${ui.size[size]}`" :title="title">
		<img v-if="src" :class="`${ui.size[size]} ${ui.imgClass} ${imgClass}`" :alt="alt" :src="src" />
		<span v-else-if="placeholder" :class="ui.placeholder">{{ placeholder }}</span>
		<Icon v-else-if="fallbackIcon" :name="fallbackIcon" :class="`${ui.icon.base} ${ui.icon.size}`" />
	</div>
</template>

<script lang="ts" setup>
	export type AvatarSize = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

	export interface FGAvatarProps {
		src?: string;
		alt?: string;
		placeholder?: string;
		fallbackIcon?: string;
		size?: AvatarSize;
		imgClass?: string;
		title?: string;
		// class?: string; // [String, Object, Array] as PropType<any>
	}

	const ui = {
		wrapper: "relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden",
		background: "bg-[var(--fg-gray-1)] dark:bg-[var(--fg-gray-8)]",
		rounded: "rounded-full",
		text: "font-medium leading-none text-[var(--fg-gray-9)] dark:text-white truncate",
		placeholder: "font-medium leading-none text-[var(--fg-gray-5)] dark:text-[var(--fg-gray-4)] truncate",
		size: {
			"3xs": "h-4 w-4 text-[8px]",
			"2xs": "h-5 w-5 text-[10px]",
			xs: "h-6 w-6 text-xs",
			sm: "h-8 w-8 text-sm",
			md: "h-10 w-10 text-base",
			lg: "h-12 w-12 text-lg",
			xl: "h-14 w-14 text-xl",
			"2xl": "h-16 w-16 text-2xl",
			"3xl": "h-20 w-20 text-3xl",
		},
		icon: {
			base: "text-[var(--fg-gray-5)] dark:text-[var(--fg-gray-4)] flex-shrink-0",
			size: "h-3/4 w-3/4",
		},
		imgClass: "object-cover",
	};

	withDefaults(defineProps<FGAvatarProps>(), {
		src: undefined,
		alt: undefined,
		placeholder: undefined,
		fallbackIcon: undefined,
		size: "md",
		imgClass: "",
		title: undefined,
	});
</script>
