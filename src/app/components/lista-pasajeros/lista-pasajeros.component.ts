import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number,
  nombrePasajero: string;
  cedula: string;
  telefono: number;
  nboleto: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 45},
  {position: 2, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 43},
  {position: 3, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 23},
  {position: 4, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 87},
  {position: 5, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 12},
  {position: 6, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 76},
  {position: 7, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 23},
  {position: 8, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 98},
  {position: 9, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 97},
  {position: 11, nombrePasajero: 'Juan Pedro Gonzales', cedula: '443-121243', telefono: 87477345, nboleto: 35},
];
@Component({
  selector: 'app-lista-pasajeros',
  templateUrl: './lista-pasajeros.component.html',
  styleUrls: ['./lista-pasajeros.component.css']
})
export class ListaPasajerosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nombrePasajero', 'cedula', 'telefono' , 'nboleto'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
