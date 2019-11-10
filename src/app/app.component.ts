import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  // Inicializacion de los puntos en el mapa
  lat: Number = 41.85
  lng: Number = -87.65

  // Coordenada de ejemplo Origen y destino del primer punto
  origin = { lat: 12.923640, lng: -85.922035 };
  destination = { lat: 13.244484, lng: -85.558890 };

  // Coordenada de ejemplo Origen y destino del segundo punto
  origin2 = { lat: 12.112772, lng: -86.238566 };
  destination2 = { lat: 12.933362, lng: -85.917761 };
}
