import { getViteConfig } from 'astro/config';

export default getViteConfig({
	test: {
		environment: 'node',
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'html'],
			include: ['src/lib/**/*.ts'],
		},
	},
});
