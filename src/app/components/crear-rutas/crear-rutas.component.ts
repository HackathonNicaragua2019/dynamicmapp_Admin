import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-crear-rutas',
  templateUrl: './crear-rutas.component.html',
  styleUrls: ['./crear-rutas.component.css']
})
export class CrearRutasComponent implements OnInit {
  
  public name: any;
  public placa: any;
  public codigo: any;

  // Inicializacion de los puntos en el mapa
  lat: Number = 41.85
  lng: Number = -87.65

  // Coordenada de ejemplo Origen y destino del primer punto
  origin: any;
  destination: any;

  markers: any = [];

  constructor(private httpService: HttpService) { }

  public options: any;
  ngOnInit() {
    this.httpService.getRoutes().subscribe(result => {
      if (result) {
        this.options = result['data'];
      }
    })
  }

  Guardar() {
    const params = {
      name: this.name,
      license_plate: this.placa,
      device_id: this.codigo
    }
    this.httpService.crearBus(params).subscribe(result => {
      console.log(result);
    });
  }

  optionSelected(event) {
    this.origin = {
      lng: event['start']['coordinates'][0],
      lat: event['start']['coordinates'][1],
    };

    this.destination = {
      lng: event['end']['coordinates'][0],
      lat: event['end']['coordinates'][1],
    }
  }

  mapClicked($event: MouseEvent) {

    const point = {
      lat: $event.coords.lat,
      lng: $event.coords.lng
    };

    this.markers.push({
      lat: point.lat,
      lng: point.lng,
      draggable: true
    });
  }

  Quitar(index) {
    this.markers.splice(index, 1);
  }

}
