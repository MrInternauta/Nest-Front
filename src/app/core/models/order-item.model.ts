import { Id, Order, Product } from '@advanced-front/core/models';

export class OrderItem {
  constructor(
    public quantity: number,
    public product: Product,
    public id: Id | null,
    public   order: Order
  ) {}
}

