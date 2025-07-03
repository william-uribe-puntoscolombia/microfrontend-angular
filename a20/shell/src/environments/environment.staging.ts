/**
 * Staging (QA) environment configuration.
 */
import { withDevToolsStub } from '@angular-architects/ngrx-toolkit';

export const environment = {
  storeWithDevTools: withDevToolsStub, // Check Readme.md, NgRx/debug
  useMockService: false,
  apiUrl: 'http://localhost:3001/api',
};
