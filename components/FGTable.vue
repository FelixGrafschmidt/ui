<template>
	<div
		class="relative grid auto-rows-auto grid-flow-row max-h-full max-h-screen max-w-full w-fit overflow-x-auto overflow-x-auto overflow-y-auto overflow-y-auto border border-gray-2 rounded scrollbar-thumb-color-gray-9 scrollbar-track-color-gray-5 scrollbar-radius-2 scrollbar-thumb-radius-4 scrollbar-track-radius-4 scrollbar-w-4px scrollbar scrollbar-rounded"
		:style="{
			gridTemplateRows: `repeat(${data.length + 1}, auto)`,
		}"
	>
		<!-- Header -->
		<div class="sticky top-0 flex flex-row bg-gray-7 divide-x-1 divide-gray-2">
			<div class="flex flex-row bg-gray-7 divide-x-1 divide-gray-2">
				<template v-for="column in columns.left">
					<slot :name="`header-${column.id as string}`" :data="column">
						<FGTableCell
							:classes="[FGTableCellDefaultClasses, 'border-b border-b-gray-2'].join(' ')"
							:text="column.title"
							:title="column.title"
							:width="column.initialWidth"
						/>
					</slot>
				</template>
			</div>
			<div class="flex flex-row bg-gray-7 divide-x-1 divide-gray-2">
				<template v-for="column in columns.center">
					<slot :name="`header-${column.id as string}`" :data="column">
						<FGTableCell
							:classes="[FGTableCellDefaultClasses, 'border-b border-b-gray-2 justify-center'].join(' ')"
							:text="column.title"
							:title="column.title"
							:width="column.initialWidth"
						/>
					</slot>
				</template>
			</div>
			<div class="flex flex-row bg-gray-7 divide-x-1 divide-gray-2">
				<template v-for="column in columns.right">
					<slot :name="`header-${column.id as string}`" :data="column">
						<FGTableCell
							:classes="[FGTableCellDefaultClasses, 'border-b border-b-gray-2 justify-end'].join(' ')"
							:text="column.title"
							:title="column.title"
							:width="column.initialWidth"
						/>
					</slot>
				</template>
			</div>
		</div>
		<!-- Body -->
		<div class="flex flex-col divide-y-1 divide-gray-2 divide-dotted">
			<div
				v-for="(row, i) in data"
				:key="i"
				class="flex flex-row cursor-pointer divide-x-1 divide-gray-2 even:bg-gray-8 hover:bg-teal-7 even:hover:bg-teal-7"
				@click="emit('click', row)"
			>
				<div class="flex flex-row divide-x-1 divide-gray-2 divide-dotted">
					<template v-for="column in columns.left">
						<slot :name="`cell-${column.id as string}`" :column="column" :row="row">
							<FGTableCell
								:text="(row[column.id] as string) || ''"
								:title="(row[column.id] as string) || ''"
								:width="column.initialWidth"
							/>
						</slot>
					</template>
				</div>
				<div class="flex flex-row divide-x-1 divide-gray-2 divide-dotted">
					<template v-for="column in columns.center">
						<slot :name="`cell-${column.id as string}`" :column="column" :row="row">
							<FGTableCell
								:text="(row[column.id] as string) || ''"
								:title="(row[column.id] as string) || ''"
								:width="column.initialWidth"
								:classes="[FGTableCellDefaultClasses, 'justify-center'].join(' ')"
							/>
						</slot>
					</template>
				</div>
				<div class="flex flex-row divide-x-1 divide-gray-2 divide-dotted">
					<template v-for="column in columns.right">
						<slot :name="`cell-${column.id as string}`" :column="column" :row="row">
							<FGTableCell
								:text="(row[column.id] as string) || ''"
								:title="(row[column.id] as string) || ''"
								:width="column.initialWidth"
								:classes="[FGTableCellDefaultClasses, 'justify-end'].join(' ')"
							/>
						</slot>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup generic="DataType">
	import { FGTableCellDefaultClasses } from "./FGTableCell.vue";

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

	const emit = defineEmits<{
		click: [DataType];
	}>();
</script>
