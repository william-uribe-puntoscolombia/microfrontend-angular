/**
 * Development environment configuration.
 */
import { withDevtools } from '@angular-architects/ngrx-toolkit';

export const environment = {
  storeWithDevTools: withDevtools, // Check Readme.md, NgRx/debug
  useMockService: true,
  apiUrl: 'http://localhost:3000/api',
};
