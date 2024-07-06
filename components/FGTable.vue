<template>
	<div
		class="max-h-screen w-full flex flex-row overflow-y-auto border border-gray-2 rounded scrollbar-thumb-color-gray-9 scrollbar-track-color-gray-5 scrollbar-radius-2 scrollbar-thumb-radius-4 scrollbar-track-radius-4 scrollbar-w-4px divide-x-1 divide-gray-2 scrollbar scrollbar-rounded"
	>
		<!-- Header -->
		<FGColumn v-for="(column, i) in columns.left" :key="i" :column="column" :data="data" />
		<FGColumn v-for="(column, i) in columns.center" :key="i" :column="column" :data="data" />
		<FGColumn v-for="(column, i) in columns.right" :key="i" :column="column" :data="data" />
	</div>
</template>

<script lang="ts" setup generic="DataType">
	export interface TableColumn<DataType> {
		id: keyof DataType;
		title: string;
		initialWidth: number;
		hidden?: boolean;
		sorting?: "asc" | "desc" | undefined;
		// Mutually exclusive with onClick
		sortKey?: string;
		// Mutually exclusive with sorting
		onClick?: () => void;
		allowResize?: boolean;
		grow?: boolean;
	}

	export interface TableColumns<DataType> {
		left: TableColumn<DataType>[];
		center: TableColumn<DataType>[];
		right: TableColumn<DataType>[];
	}

	defineProps<{
		columns: TableColumns<DataType>;
		data: DataType[];
	}>();

	defineEmits<{
		"update:data": DataType[];
	}>();
</script>
