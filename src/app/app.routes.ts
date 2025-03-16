import { Routes } from '@angular/router';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ItemsComponent } from './pages/items/items.component';

export const routes: Routes = [
    {
        path: "",
        component: PedidosComponent
    },
    {
        path: "itens",
        component: ItemsComponent
    }
];
