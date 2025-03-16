import { Component } from '@angular/core';
import { HeadComponent } from '../../components/head/head.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/itens.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-items',
  imports: [HeadComponent, FooterComponent, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {

  items: Item[] = [];

  product = "";
  quantity = 0;
  price = 0.0;

  constructor(private itemsServices: ItemsService) {
    this.getItems();
  }

  getItems() {
    this.itemsServices.getAllItems().subscribe(items => {
      console.log('Items carregados:', items); // Verifique os dados
      this.items = items;
    },
      error => {
        console.error('Erro ao carregar items:', error); // Verifique erros
      });
  }

  addItems() {
    this.itemsServices.addItems({
      product: this.product,
      quantity: this.quantity,
      price: this.price,
    }).subscribe(() => this.getItems());
  }
}
