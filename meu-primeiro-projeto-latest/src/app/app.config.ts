import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { environment } from 'environments/environment';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

import localePt from '@angular/common/locales/pt';

//interceptor
registerLocaleData(localePt);
import { httpInterceptor } from './interceptor/http.interceptor';

//translate
import { provideTranslate } from './app.translate';

//img
import { IMAGE_LOADER, ImageLoaderConfig, provideImgixLoader, registerLocaleData } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(
      {
        paramsInheritanceStrategy: 'always',
      }
    )),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),

    //provideImgixLoader(environment.img),

    //OUTRA FORMA DE TRABALHAR E CARREGAR IMAGENS
    {
      provide: IMAGE_LOADER, useValue: (config: ImageLoaderConfig) => {
        const img = config.src.split('.');
        const name = img.shift();
        const type = img.pop(); //pop pega o último item do array
        const width = config.width;
        return `${environment.img}${name}-${width}w.${type}`;
      },
    },

    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
