declare module "@nuxt/schema" {
	interface AppConfigInput {
		"fg-theme"?: {
			primary?: string;
			secondary?: string;
			tertiary?: string;
			gray?: string;
		};
	}
}

declare module "@nuxt/schema" {
	interface AppConfig {
		"fg-theme": {
			primary: string;
			secondary: string;
			tertiary: string;
			gray: string;
		};
	}
}

export {};
