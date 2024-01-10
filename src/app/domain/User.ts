import { BaseDomain } from './BaseDomain';

export class User extends BaseDomain {
  constructor(
    readonly nome: string,
    readonly email: string,
    readonly senha: string,
    readonly confirmarSenha: string
  ) {
    super();
  }
}
