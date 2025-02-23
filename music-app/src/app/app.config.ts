
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

export const appConfig: ApplicationConfig = {
  providers: [
 
    provideRouter(routes),
 
    provideHttpClient(),


    importProvidersFrom(
      BrowserAnimationsModule,
      MatListModule,
      MatButtonModule
    )
  ],
};
