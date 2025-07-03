import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  plugins: [angular(), nxViteTsPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.spec.ts'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default'], // options: verbose, dot, html, tap.
    coverage: {
      reportsDirectory: './coverage',
      provider: 'v8' as const, // Optional: 'istanbul'(@vitest/coverage-istanbul)
      reporter: ['text', 'html', 'json', 'lcov'],
      exclude: [
        '.angular/**',
        '**/*-type.ts',
        '**/*.config.ts',
        '**/*.routes.ts',
        'dist/**',
        'node_modules/**',
        'eslint.config.js',
        'federation.config.js',
        'src/app/starts-with.ts',
        'src/app/transloco-loader.ts',
        'src/bootstrap.ts',
        'src/environments/*',
        'src/main.ts',
        'vitest.config.ts',
        'public/mockServiceWorker.js',
      ],
    },
  },
}));
