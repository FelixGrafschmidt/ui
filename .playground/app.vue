<template>
	<div class="dark">
		<div class="h-screen-md flex flex-col gap-2 p-2 text-neutral-2 dark:bg-gray-900">
			<FGAvatarGroup size="md" :max="max" :avatars="avatars" />
			<div><input v-model="max" type="number" class="w-12" /></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { FGAvatarProps } from "../components/FGAvatar.vue";

	const max = ref(20);
	const avatars: FGAvatarProps[] = [
		{
			alt: "Man",
			fallbackIcon: "i-carbon-user-filled",
			title: "Man with icon",
		},
		{
			src: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			alt: "Woman",
			fallbackIcon: "i-carbon-user-filled",
			title: "Woman with male image",
		},
		{
			alt: "Man",
			placeholder: "AB",
			title: "Man with placeholder",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-direction-right-01-filled",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-ai-label",
		},
		{
			alt: "Man",
			fallbackIcon: "i-carbon-user-filled",
			title: "Man with icon",
		},
		{
			src: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			alt: "Woman",
			fallbackIcon: "i-carbon-user-filled",
			title: "Woman with male image",
		},
		{
			alt: "Man",
			placeholder: "AB",
			title: "Man with placeholder",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-direction-right-01-filled",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-ai-label",
		},
		{
			alt: "Man",
			fallbackIcon: "i-carbon-user-filled",
			title: "Man with icon",
		},
		{
			src: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			alt: "Woman",
			fallbackIcon: "i-carbon-user-filled",
			title: "Woman with male image",
		},
		{
			alt: "Man",
			placeholder: "AB",
			title: "Man with placeholder",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-direction-right-01-filled",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-ai-label",
		},
		{
			alt: "Man",
			fallbackIcon: "i-carbon-user-filled",
			title: "Man with icon",
		},
		{
			src: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			alt: "Woman",
			fallbackIcon: "i-carbon-user-filled",
			title: "Woman with male image",
		},
		{
			alt: "Man",
			placeholder: "AB",
			title: "Man with placeholder",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-direction-right-01-filled",
		},
		{
			alt: "Woman",
			fallbackIcon: "i-carbon-ai-label",
		},
	];
</script>
