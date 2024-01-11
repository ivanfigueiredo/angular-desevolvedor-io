export interface CreateUserDto {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

export interface ICreateUserInBound {
  execute(dto: CreateUserDto): Promise<void>;
}
