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

	const displayedAvatars: ComputedRef<FGAvatarProps[]> = computed(() => {
		// const max = calculatedMax.value < props.max ? calculatedMax.value - 1 : props.max;
		let max = Math.min(calculatedMax.value, props.max <= 0 ? calculatedMax.value : props.max);
		// const max = Math.min(calculatedMax.value, props.max);

		if (!props.max || props.max < 0 || props.avatars.length <= props.max) {
			// reduce array if less space than needed
			console.log(calculatedMax.value, props.avatars.length);

			if (calculatedMax.value && calculatedMax.value < props.avatars.length) {
				return reduceAvatars(max - 1);
			}

			return props.avatars.toReversed();
		} else {
			// reduce array for label avatar
			if (calculatedMax.value < props.avatars.length && props.max >= calculatedMax.value) {
				max = max - 1;
			}
			return reduceAvatars(max);
		}
	});

	function reduceAvatars(max: number) {
		const avatars = props.avatars.slice(0, max);
		avatars.push({ placeholder: `+${props.avatars.length - max}` });

		return avatars.toReversed();
	}

	const calculatedMax = computed(() => {
		if (!wrapper.value) {
			console.log("wrapper not found");

			return props.max;
		}
		const totalWidth = Object.values(wrapper.value.children).reduce(
			(total, i) => total + (i as HTMLElement).clientWidth + parseInt(getComputedStyle(i).marginInlineEnd),
			0
		);

		const avatarWidth = totalWidth / props.avatars.length;

		return Math.floor(wrapper.value.offsetWidth / avatarWidth);
	});
</script>
