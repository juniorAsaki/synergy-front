import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers || [], // Garde les autres providers existants
    importProvidersFrom(HttpClientModule) // Ajoute HttpClientModule ici
  ]
})
  .catch((err) => console.error(err));
