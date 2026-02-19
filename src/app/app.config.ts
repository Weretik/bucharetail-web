import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {bucharetailPreset} from '../util/theme/bucharetail.preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: bucharetailPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.my-app-dark',
          cssLayer: false,
        },
      },
      ripple: true,
      inputVariant: 'filled',
      zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100,
      },
    })
  ]
};
