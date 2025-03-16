import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pedido } from '../models/pedidos.model';
import { Item } from '../models/itens.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) { }

  getAllPedidos() {
    return this.httpClient.get<Pedido[]>(this.url + "/pedidos");
  }

  getAllItems() {
    return this.httpClient.get<Item[]>(this.url + "/items");
  }

  addPedidos(pedido: any) {
    return this.httpClient.post(this.url + "/pedidos", pedido);
  }

  checkPedidos(id: number, pedido: any) {
    return this.httpClient.patch(this.url + "/pedidos/" + id, pedido);
  }

  deletePedidos(id: number) {
    return this.httpClient.delete(this.url + "/pedidos/" + id);
  }
}
