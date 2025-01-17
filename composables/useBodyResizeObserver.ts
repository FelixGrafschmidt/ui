import { defineStore } from "pinia";

export const useBodyResizeObserver = defineStore("body-resize-observer", () => {
	const methods: (() => void)[] = [];

	onMounted(() => {
		const resizeObserver = new ResizeObserver(() => {
			methods.forEach((method) => {
				method();
			});
		});

		resizeObserver.observe(document.body);
	});

	return { methods };
});
