<template>
	<span :class="`${ui.wrapper}`">
		<FGAvatar
			v-for="(avatar, index) in displayedAvatars"
			:key="index"
			:src="avatar.src"
			:alt="avatar.alt"
			:size="size"
			:fallback-icon="avatar.fallbackIcon"
			:img-class="avatar.imgClass"
			:placeholder="avatar.placeholder"
			:class="`${ui.margin} ${ui.ring}`"
			:title="avatar.title"
		/>
	</span>
</template>

<script lang="ts" setup>
	import type { FGAvatarProps } from "./FGAvatar.vue";

	//TODO: rename type or keep possibility to customize size
	export type FGAvatarPropsLite = Omit<FGAvatarProps, "size">;

	export type Ui = { wrapper: string; ring: string; margin: string };
	export type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

	const displayedAvatars: ComputedRef<FGAvatarPropsLite[]> = computed(() => {
		//TODO: deep clone needed?
		let avatars = structuredClone(props.avatars);
		// let avatars = props.avatars;

		// TODO: what to do with props.max = 0? use "props.max === undefined || props.max < 0"?
		if (!props.max || props.max < 0) {
			return avatars.reverse();
		} else {
			avatars = avatars.slice(0, props.max);
			if (props.avatars.length > props.max) avatars.push({ placeholder: `+${props.avatars.length - props.max}` });

			return avatars.reverse();
		}
	});

	interface Props {
		ui?: Ui;
		size?: Size;
		max?: number;
		avatars: FGAvatarPropsLite[];
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
		max: undefined,
		avatars: undefined,
	});
</script>
