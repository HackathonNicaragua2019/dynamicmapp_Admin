import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpHeaders: any;
  private APIUrl = environment.API;
  private routes = 'routes';
  private buses = 'buses';
  private stops = 'stops';

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*/*')
      .set('Content-Type', 'application/json');
  }

  public getRoutes() {
    const url = this.APIUrl + this.routes;
    return this.getAnyUrl(url);
  }

  public getAnyRoute(id) {
    const url = this.APIUrl + this.routes + '/' + id;
    return this.getAnyUrl(url);
  }

  private getAnyUrl(url) {
    return this.httpClient.get(url, this.httpHeaders);
  }

  public crearRuta(params) {
    const url = this.APIUrl + this.routes;
    return this.httpClient.post(url, params);
  }

  public eliminarRuta(id) {
    const url = this.APIUrl + this.routes + '/' + id;
    return this.httpClient.delete(url, this.httpHeaders);
  }

  public crearBus(params) {
    const url = this.APIUrl + this.buses;
    return this.httpClient.post(url, params);
  }

  public crearMarker(marker, id) {
    const params = {
      position: JSON.stringify({
        "type": "Point",
        "coordinates": [marker.lng, marker.lat]
      }),
      router_id: id
    };
    const url = this.APIUrl + this.stops;
    return this.httpClient.post(url, params);
  }
}
