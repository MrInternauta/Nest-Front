import { Id } from '@advanced-front/core/models';

export class Product {
  constructor(
    public items: any[],
    public total: number,
    public id: Id | null,
  ) {}
}

