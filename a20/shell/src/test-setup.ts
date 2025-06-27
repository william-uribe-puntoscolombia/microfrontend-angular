/**
 * Global setup for Angular testing environment
 * More info: https://analogjs.org/docs/features/testing/vitest#zoneless-setup
 */
import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';
// import '@analogjs/vitest-angular/setup-snapshots'; // install (@analogjs/vitest-angular)

@NgModule({
  providers: [provideZonelessChangeDetection()],
})
export class ZonelessTestModule {}

getTestBed().initTestEnvironment([BrowserTestingModule, ZonelessTestModule], platformBrowserTesting());
