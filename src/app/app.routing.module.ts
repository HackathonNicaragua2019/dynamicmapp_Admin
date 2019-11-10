import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CrearRutasComponent} from '../app/components/crear-rutas/crear-rutas.component';
import {ListaRutasComponent} from '../app/components/lista-rutas/lista-rutas.component';

@NgModule({
  declarations: [ 
    CrearRutasComponent, ListaRutasComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'crear', component: CrearRutasComponent },
      { path: 'lista', component: ListaRutasComponent },
     
      { path: '**', redirectTo: 'crear' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}