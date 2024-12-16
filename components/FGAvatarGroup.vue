<template>
	<span v-if="max > 0 && slotElements.length" :class="`${ui.wrapper}`">
		<FGAvatar
			v-if="slotElements.length > max"
			:size="size"
			:placeholder="`+${slotElements.length - max}`"
			:class="`${ui.margin} ${ui.ring}`"
		/>
		<!-- Iterate over slot elements -->
		<component
			:is="child.type"
			v-for="(child, index) in slotElements.slice(0, max).reverse()"
			v-bind="child.props"
			:key="index"
			:class="[ui.ring, ui.margin, ...(child.props?.class?.split(' ') || [])].join(' ')"
			:size="size"
		>
			<template #default>{{ child.children }}</template>
		</component>
		<!-- <slot /> -->
	</span>
</template>

<script lang="ts" setup>
	import type { VNode } from "vue";

	export type Ui = { wrapper: string; ring: string; margin: string };
	export type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

	interface Props {
		ui?: Ui;
		size?: Size;
		max?: number;
	}

	withDefaults(defineProps<Props>(), {
		ui: () => {
			return {
				wrapper: "inline-flex flex-row-reverse justify-end p-1",
				ring: "ring-2 ring-white dark:ring-gray-900",
				margin: "-me-1.5 first:me-0",
			};
		},
		size: "sm", //() => config.default.size
		max: undefined,
	});

	const slots = useSlots();

	const slotElements = computed(() => {
		const children = slots.default?.().map((vnode: VNode) => {
			// if (vnode.type === "FGAvatar") {
			return {
				type: vnode.type,
				props: vnode.props || {},
				name: vnode.key || undefined,
				children: vnode.children || undefined,
			};
			// }
		});
		//FIXME: filter annotations
		return children?.filter((c) => c.type.__name === "FGAvatar") || [];
	});
</script>
