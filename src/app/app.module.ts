import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
// import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { environment } from './environments/environment';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import {CrearRutasComponent} from './components/crear-rutas/crear-rutas.component';
import {ListaRutasComponent} from './components/lista-rutas/lista-rutas.component';
import {ListaPasajerosComponent} from './components/lista-pasajeros/lista-pasajeros.component';

// import { AppRoutingModule } from './app.routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/crear', pathMatch: 'full'},
  {path: 'crear', component: CrearRutasComponent},
  {path: 'lista', component: ListaRutasComponent},
  {path: 'boleto', component: ListaPasajerosComponent},
]

@NgModule({
  imports:
    [
      BrowserModule,
     // AppRoutingModule,
      // ComponentsModule, 
      MaterialModule,
      ServicesModule,
      AgmCoreModule.forRoot({
        // API KEY GOOGLE MAP
        apiKey: environment.apiKeyGoogleMaps,
      }),
      // Componente para las direcciones
      AgmDirectionModule,
      HttpClientModule,
      HttpClientJsonpModule,
      RouterModule.forRoot(routes, { useHash: true }),
    ],
  declarations: [AppComponent, CrearRutasComponent, ListaRutasComponent, ListaPasajerosComponent],
  providers: [
    GoogleMapsAPIWrapper
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}