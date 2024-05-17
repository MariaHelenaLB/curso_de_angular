import { ApplicationConfig, LOCALE_ID } from '@angular/core';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

//interceptor
registerLocaleData(localePt);
import { httpInterceptor } from './interceptor/http.interceptor';

//translate
import { provideTranslate } from './app.translate';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(
      {
        paramsInheritanceStrategy: 'always',
      }
    )),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
