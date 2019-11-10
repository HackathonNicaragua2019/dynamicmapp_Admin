import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-rutas',
  templateUrl: './crear-rutas.component.html',
  styleUrls: ['./crear-rutas.component.css']
})
export class CrearRutasComponent implements OnInit {
  // Inicializacion de los puntos en el mapa
  lat: Number = 41.85
  lng: Number = -87.65

  // Coordenada de ejemplo Origen y destino del primer punto
  origin = { lat: 12.923640, lng: -85.922035 };
  destination = { lat: 13.244484, lng: -85.558890 };

  // Coordenada de ejemplo Origen y destino del segundo punto
  origin2 = { lat: 12.112772, lng: -86.238566 };
  destination2 = { lat: 12.933362, lng: -85.917761 };

  constructor() { }

  ngOnInit() {
  }

}
