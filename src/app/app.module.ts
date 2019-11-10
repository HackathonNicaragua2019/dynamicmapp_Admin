import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
// import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { environment } from './environments/environment';
import {CrearRutasComponent} from './components/crear-rutas/crear-rutas.component'

@NgModule({
  imports:
    [
      BrowserModule,
      // ComponentsModule, 
      MaterialModule,
      ServicesModule,
      AgmCoreModule.forRoot({
        // API KEY GOOGLE MAP
        apiKey: environment.apiKeyGoogleMaps,
      }),
      // Componente para las direcciones
      AgmDirectionModule
    ],
  declarations: [AppComponent, CrearRutasComponent],
  providers: [
    GoogleMapsAPIWrapper
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}