import { Roles } from '@advanced-front/core';
import { Customer } from './customer.model';

export class Usuario {
  constructor(
    public email: string,
    public password: string,
    public id: Id | null,
    public role: Roles,
    public customer?: Customer | null
  ) {}
}

export type Id = string | null;
export type Token = string | null;
