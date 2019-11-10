import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { MouseEvent } from '@agm/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-rutas',
  templateUrl: './crear-rutas.component.html',
  styleUrls: ['./crear-rutas.component.css']
})
export class CrearRutasComponent implements OnInit {

  public ruta: any;
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

  constructor(private httpService: HttpService, private _snackBar: MatSnackBar) { }

  public options: any;
  ngOnInit() {
    this.httpService.getRoutes().subscribe(result => {
      if (result) {
        this.options = result['data'];
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  Guardar() {
    const params = {
      name: this.name,
      license_plate: this.placa,
      device_id: this.codigo
    }
    this.httpService.crearBus(params).subscribe(result => {
      if (result) {
        this.guardarStops();
      }
    });
  }

  guardarStops() {
    this.markers.forEach(marker => {
      this.httpService.crearMarker(marker, this.ruta.id).subscribe(result => {
        if (result) {
          this.openSnackBar('Datos guardados', 'Ok');
        }
      });
    });
  }

  optionSelected(event) {
    this.ruta = event;
    this.ObtenerMarcadores();
    this.origin = {
      lng: event['start']['coordinates'][0],
      lat: event['start']['coordinates'][1],
    };

    this.destination = {
      lng: event['end']['coordinates'][0],
      lat: event['end']['coordinates'][1],
    }
  }

  ObtenerMarcadores() {
    this.markers = [];
    this.ruta.stops.forEach(item => {
      const m = {
        lng: item['position']['coordinates'][0],
        lat: item['position']['coordinates'][1],
      };
      this.markers.push(m);
    });
    console.log(this.markers);
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

  crearRuta() {
    const params = {
      start: JSON.stringify({
        "type": "Point",
        "coordinates": [-74.98615270853043, 40.74894149554006]
      }),
      end: JSON.stringify({
        "type": "Point",
        "coordinates": [-74.98615270853043, 40.74894149554006]
      }),
      route: JSON.stringify({
        "type": "LineString",
        "coordinates": [
          [-74.98615270853043, 40.74894149554006],
          [-74.98615270853043, 40.74894149554006],
          [-74.98615270853043, 40.74894149554006]
        ]
      })
    };

    this.httpService.crearRuta(params).subscribe(result => {
      console.log(result);
    });
  }


}
