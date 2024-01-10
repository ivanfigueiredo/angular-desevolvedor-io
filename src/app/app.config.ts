import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormControlDirective, FormControl } from '@angular/forms';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { CreateUserUseCase } from './application/CreateUserUseCase';
import { ApiGatewayAdapter } from './infra/ApiGatewayAdapter';
import { AxiosAdapter } from './infra/AxiosAdapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    FormControlDirective,
    FormControl,
    {
      provide: CreateUserUseCase,
      useClass: CreateUserUseCase,
    },
    {
      provide: ApiGatewayAdapter,
      useClass: ApiGatewayAdapter,
    },
    {
      provide: AxiosAdapter,
      useClass: AxiosAdapter,
    },
    provideClientHydration(),
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
};
