import { Id, Usuario } from '@advanced-front/core/models';

export class Order {
  constructor(
    public name: string,
    public lastName: string,
    public phone: string,
    public id: Id | null,
    public user: Usuario,
  ) {}
}

