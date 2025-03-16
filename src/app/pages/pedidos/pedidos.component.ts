import { Component } from '@angular/core';
import { HeadComponent } from '../../components/head/head.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../models/pedidos.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Item } from '../../models/itens.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  imports: [HeadComponent, FooterComponent, DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  pedidos: Pedido[] = [];
  itemsForPedidos: Item[] = [];

  client = "";
  itens = [];
  total = 0;
  status = "Pendente";
  created_at = "";

  constructor(private pedidosServices: PedidosService) {
    this.getPedidos();
    this.getItems();
  }

  getPedidos() {
    this.pedidosServices.getAllPedidos().subscribe(pedidos => this.pedidos = pedidos);
  }

  getItems() {
    this.pedidosServices.getAllItems().subscribe(itemsForPedidos => this.itemsForPedidos = itemsForPedidos)
  }

  checkPedido(pedido: Pedido) {
    this.pedidosServices.checkPedidos(pedido.id!, {
      status: "Processado"
    }).subscribe(() => this.getPedidos());
  }

  uncheckPedido(pedido: Pedido) {
    this.pedidosServices.checkPedidos(pedido.id!, {
      status: "Pendente"
    }).subscribe(() => this.getPedidos());
  }

  deletePedido(pedido: Pedido) {
    this.pedidosServices.deletePedidos(pedido.id!).subscribe(() => this.getPedidos());
  }

  addPedidos() {
    this.pedidosServices.addPedidos({
      client: this.client,
      items: this.itens,
      total: this.total,
      status: this.status,
      created_at: this.created_at
    }).subscribe(() => this.getPedidos());
  }
}
