<template>
	<div ref="wrapper" :class="`${ui.wrapper}`">
		<!-- TODO: handle overflow -->
		<FGAvatar
			v-for="(avatar, index) in displayedAvatars"
			:key="index"
			:src="avatar.src"
			:alt="avatar.alt"
			:size="avatar.size || size"
			:fallback-icon="avatar.fallbackIcon"
			:img-class="avatar.imgClass"
			:placeholder="avatar.placeholder"
			:class="`${ui.margin} ${ui.ring}`"
			:title="avatar.title"
		/>
	</div>
</template>

<script lang="ts" setup>
	import type { FGAvatarProps } from "./FGAvatar.vue";

	export type Ui = { wrapper: string; ring: string; margin: string };
	export type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

	const displayedAvatars: ComputedRef<FGAvatarProps[]> = computed(() => {
		if (!calculatedMax.value || calculatedMax.value < 0 || props.avatars.length <= calculatedMax.value) {
			return props.avatars.toReversed();
		} else {
			const avatars = props.avatars.slice(0, calculatedMax.value);
			avatars.push({ placeholder: `+${props.avatars.length - calculatedMax.value}` });

			return avatars.toReversed();
		}
	});

	interface Props {
		ui?: Ui;
		size?: Size;
		max?: number;
		avatars: FGAvatarProps[];
	}

	const props = withDefaults(defineProps<Props>(), {
		ui: () => {
			return {
				wrapper: "inline-flex flex-row-reverse justify-end p-1",
				ring: "ring-2 ring-white dark:ring-gray-900",
				margin: "-me-1.5 first:me-0",
			};
		},
		size: "sm",
		max: 0,
		avatars: undefined,
	});

	const wrapper = ref<HTMLSpanElement>();

	const calculatedMax = computed(() => {
		if (!wrapper.value) {
			return props.max;
		}
		const totalWidth = Object.values(wrapper.value.children).reduce((total, i) => total + (i as HTMLElement).offsetWidth, 0);

		const avatarWidth = totalWidth / props.avatars.length;

		return Math.min(Math.floor(wrapper.value.offsetWidth / avatarWidth) + 1, props.max);
	});
</script>
