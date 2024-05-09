import { ApplicationConfig, LOCALE_ID } from '@angular/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

//interceptor
registerLocaleData(localePt);
import { httpInterceptor } from './interceptor/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
