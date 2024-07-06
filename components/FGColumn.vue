<template>
	<div :style="{ width: `${column.initialWidth}px` }" :class="column.grow && 'grow'" class="">
		<!-- Body -->
		<div class="mt-12 flex flex-col divide-y-1 divide-gray-4 divide-dotted">
			<div v-for="(entry, i) in data" :key="i" class="flex flex-row items-center justify-center p-1">
				<span class="">
					{{ entry[column.id] }}
				</span>
			</div>
		</div>
		<!-- Header -->
		<div
			:style="{ width: `${column.initialWidth}px` }"
			class="fixed top-0 h-12 flex flex-row items-center justify-center border-b border-b-gray-2 p-1"
		>
			<span class="text-lg font-semibold uppercase">{{ column.title }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup generic="DataType">
	import type { TableColumn } from "./FGTable.vue";

	defineProps<{
		data: DataType[];
		column: TableColumn<DataType>;
	}>();
</script>
