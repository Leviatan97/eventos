import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  constructor(private http: HttpClient) { }

  listPlace() {
    return this.http.get('assets/json/lugar.json');
  }

  listMusic() {
    return this.http.get('assets/json/musica.json');
  }

  listFood() {
    return this.http.get('assets/json/alimentacion.json');
  }

  listDecoration() {
    return this.http.get('assets/json/decoracion.json');
  }
}
