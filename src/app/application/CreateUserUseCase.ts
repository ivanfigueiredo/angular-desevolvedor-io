import { Inject, Injectable } from '@angular/core';
import {
  CreateUserDto,
  ICreateUserInBound,
} from './inbound/ICreateUserInBound';
import { IApiGatewayOutBound } from './outbound/IApiGatewayOutBound';
import { User } from '../domain/User';
import { ApiGatewayAdapter } from '../infra/ApiGatewayAdapter';

@Injectable()
export class CreateUserUseCase implements ICreateUserInBound {
  constructor(
    @Inject(ApiGatewayAdapter)
    private readonly apiGatewayOutBound: IApiGatewayOutBound
  ) {}

  async execute(dto: CreateUserDto): Promise<void> {
    const user = new User(dto.nome, dto.email, dto.senha, dto.confirmarSenha);
    await this.apiGatewayOutBound.createUser(user);
  }
}
