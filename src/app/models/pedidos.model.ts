export interface Pedido {
    id?: number,
    client: string,
    total: number,
    status: string,
    created_at: string,
    itens: ItemPedido[]
}

interface ItemPedido {
    id: number;
    product: string;
    quantity: number;
    price: number;
  }