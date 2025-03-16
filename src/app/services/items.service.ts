import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Item } from '../models/itens.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url = environment.api

  constructor(private httpClient: HttpClient) { }

  getAllItems() {
    return this.httpClient.get<Item[]>(`${this.url}/items`);
  }

  addItems(item: any) {
    return this.httpClient.post(`${this.url}/items`, item);
  }
}
