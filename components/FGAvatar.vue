<template>
	<span :class="`${ui.wrapper} ${ui.background} ${ui.rounded} ${ui.size[size]} overflow-hidden`" :title="title">
		<img v-if="src" :class="`${ui.size[size]} ${imgClass} object-cover`" :alt="alt" :src="src" />
		<span v-else-if="placeholder" :class="ui.placeholder">{{ placeholder }}</span>
		<Icon v-else-if="fallbackIcon" :name="fallbackIcon" :class="`${ui.icon.base} ${ui.icon.size}`" />
		<!-- ${ui.icon.size[size]} -->
		<!-- <span v-if="chipColor" :class="chipClass">
			{{ chipText }}
		</span> -->
		<slot />
	</span>
</template>

<script lang="ts" setup>
	export type Size = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

	export interface FGAvatarProps {
		src?: string;
		alt?: string;
		placeholder?: string;
		fallbackIcon?: string;
		size?: Size;
		imgClass?: string;
		title?: string;
		// class?: string; // [String, Object, Array] as PropType<any>
	}

	const ui = {
		wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
		background: "bg-gray-100 dark:bg-gray-800",
		rounded: "rounded-full",
		text: "font-medium leading-none text-gray-900 dark:text-white truncate",
		placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
		size: {
			"3xs": "h-4 w-4 text-[8px]",
			"2xs": "h-5 w-5 text-[10px]",
			xs: "h-6 w-6 text-xs",
			sm: "h-8 w-8 text-sm",
			md: "h-10 w-10 text-base",
			lg: "h-12 w-12 text-lg",
			xl: "h-14 w-14 text-xl",
			"2xl": "h-16 w-16 text-2xl",
			"3xl": "h-20 w-20 text-3xl",
		},
		//   chip: {
		//     base: 'absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium',
		//     background: 'bg-{color}-500 dark:bg-{color}-400',
		//     position: {
		//       'top-right': 'top-0 right-0',
		//       'bottom-right': 'bottom-0 right-0',
		//       'top-left': 'top-0 left-0',
		//       'bottom-left': 'bottom-0 left-0'
		//     },
		//     size: {
		//       '3xs': 'h-[4px] min-w-[4px] text-[4px] p-px',
		//       '2xs': 'h-[5px] min-w-[5px] text-[5px] p-px',
		//       xs: 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
		//       sm: 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
		//       md: 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
		//       lg: 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
		//       xl: 'h-3.5 min-w-[0.875rem] text-[11px] p-1',
		//       '2xl': 'h-4 min-w-[1rem] text-[12px] p-1',
		//       '3xl': 'h-5 min-w-[1.25rem] text-[14px] p-1'
		//     }
		//   },
		//TODO: uses specific  or procentual sizes? add iconClass prop?
		icon: {
			base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
			size: "h-7.5/10 w-7.5/10",
			// size: {
			// 	"3xs": "h-2 w-2",
			// 	"2xs": "h-2.5 w-2.5",
			// 	xs: "h-3 w-3",
			// 	sm: "h-4 w-4",
			// 	md: "h-5 w-5",
			// 	lg: "h-6 w-6",
			// 	xl: "h-7 w-7",
			// 	"2xl": "h-8 w-8",
			// 	"3xl": "h-10 w-10",
			// },
		},
	};

	withDefaults(defineProps<FGAvatarProps>(), {
		src: undefined,
		alt: undefined,
		placeholder: undefined,
		fallbackIcon: undefined, //() => config.default.icon
		size: "sm", //() => config.default.size
		imgClass: "",
		title: undefined,
		// class: "",
		/**
		chipColor: {
		  type: String as PropType<AvatarChipColor>,
		  default: () => config.default.chipColor,
		  validator(value: string) {
			return ['gray', ...appConfig.ui.colors].includes(value)
		  }
		},
		chipPosition: {
		  type: String as PropType<AvatarChipPosition>,
		  default: () => config.default.chipPosition,
		  validator(value: string) {
			return Object.keys(config.chip.position).includes(value)
		  }
		},
		chipText: {
		  type: [String, Number],
		  default: null
		},
		ui: {
		  type: Object as PropType<DeepPartial<typeof config> & { strategy?: Strategy }>,
		  default: () => ({})
		}
	 **/
	});

	// const initials = computed(() => {
	// 	return (props.placeholder || "")
	// 		.split(" ")
	// 		.map((word) => word.charAt(0))
	// 		.join("")
	// 		.substring(0, 2)
	// 		.toLocaleUpperCase();
	// });
</script>
