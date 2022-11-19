import { Id } from '@advanced-front/core/models';

export class Customer {
  constructor(
    public items: any[],
    public total: number,
    public id: Id | null,
  ) {}
}

