declare module "@nuxt/schema" {
	interface AppConfigInput {
		theme?: {
			primary?: string;
			gray?: string;
		};
	}
}

declare module "@nuxt/schema" {
	interface AppConfig {
		theme: {
			primary: string;
			gray: string;
		};
	}
}

export {};
