<template>
	<div :style="{ width: `${width}px`, maxWidth: `${width}px` }" :title="title" :class="classes" @click="emit('click', $event)">
		<slot>
			<span class="truncate">
				{{ text }}
			</span>
		</slot>
	</div>
</template>

<script lang="ts">
	export const FGTableCellDefaultClasses = "h-12 flex flex-row items-center px-4 py-2";
</script>

<script lang="ts" setup>
	withDefaults(
		defineProps<{
			title?: string;
			text?: string;
			width: number;
			classes?: string;
		}>(),
		{
			title: "",
			text: "",
			classes: FGTableCellDefaultClasses,
		}
	);

	const emit = defineEmits<{ click: [MouseEvent] }>();
</script>
