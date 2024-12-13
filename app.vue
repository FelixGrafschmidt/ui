<template>
	<main>
		<div class="h-96 w-screen-xl flex flex-col p-12">
			<FGTable :columns="columns" :data="users" @click="console.log($event)">
				<template #header-name="{ data }">
					<FGTableCell
						:width="data.initialWidth"
						:title="data.title"
						:classes="[FGTableCellDefaultClasses, 'border-b justify-center border-b-gray-2'].join(' ')"
					>
						{{ data.title }}
					</FGTableCell>
				</template>
			</FGTable>
		</div>
	</main>
</template>

<script setup lang="ts">
	import "@unocss/reset/tailwind.css";
	import type { TableColumns } from "./components/FGTable.vue";
	import { FGTableCellDefaultClasses } from "./components/FGTableCell.vue";

	interface User {
		name: string;
		createdAt: string;
		birthday: string;
		street: string;
		id: number;
	}

	let users: User[];
	try {
		const { data } = await useFetch<User[]>("https://668973600ea28ca88b88042b.mockapi.io/users");
		if (data.value) {
			users = data.value;
		}
	} catch (error) {
		console.error(error);
	}

	const columns: ComputedRef<TableColumns<User>> = computed(() => {
		const result: TableColumns<User> = {
			left: [
				{
					id: "id",
					title: "ID",
					initialWidth: 50,
					grow: true,
				},
			],
			center: [
				{
					id: "name",
					title: "Name",
					initialWidth: 250,
				},
				{
					id: "street",
					title: "Street",
					initialWidth: 200,
				},
				{
					id: "birthday",
					title: "Birthday",
					initialWidth: 300,
				},
			],
			right: [
				{
					id: "createdAt",
					title: "Created At",
					initialWidth: 300,
				},
			],
		};
		return result;
	});
</script>

<style>
	body {
		@apply bg-gray-7 text-gray-2;
	}
</style>
