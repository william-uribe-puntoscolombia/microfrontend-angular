import { defineConfig } from 'vitest/config';

export default async () => {
  const angular = (await import('@analogjs/vite-plugin-angular')).default;
  return defineConfig({
    plugins: [angular()],

    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './setup.env.ts',
      include: ['**/*.spec.ts'],
      coverage: {
        provider: 'v8',
        exclude: [
          'dist/**',
          'vitest.config.ts',
          'federation.config.js',
          'src/bootstrap.ts',
          'src/main.ts',
          '.angular/**',
          '**/*.routes.ts',
          '**/*.config.ts',
          'src/app/starts-with.ts',
          '**/*-type.ts',
        ],
        enabled: true,
      reporter: ['text', 'json', 'html', 'lcov'],
      },
    },
  });
};
