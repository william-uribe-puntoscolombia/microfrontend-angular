import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default async () => {
  const angular = (await import('@analogjs/vite-plugin-angular')).default;
  return defineConfig({
    plugins: [angular()],
    resolve: {
      alias: {
        '@core': resolve(__dirname, 'src/app/core'),
        '@pages': resolve(__dirname, 'src/app/pages'),
        '@env': resolve(__dirname, 'src/environments/environment'),
      },
    },

    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './setup.env.ts',
      include: ['**/*.spec.ts'],
      coverage: {
        provider: 'v8',
        exclude: [
          'dist/**',
          'tailwind.config.js',
          'src/app/transloco-loader.ts',
          'vitest.config.ts',
          'federation.config.js',
          'src/bootstrap.ts',
          'src/main.ts',
          '.angular/**',
          '**/*.routes.ts',
          '**/*.config.ts',
          'eslint.config.js',
          'src/environments/*',
        ],
        enabled: true,
        reporter: ['text', 'json', 'html', 'lcov'],
      },
    },
  });
};
