import { Inject, Injectable } from '@angular/core';
import { IApiGatewayOutBound } from '../application/outbound/IApiGatewayOutBound';
import { User } from '../domain/User';
import { IAxios } from './IAxios';
import { AxiosAdapter } from './AxiosAdapter';

@Injectable()
export class ApiGatewayAdapter implements IApiGatewayOutBound {
  constructor(
    @Inject(AxiosAdapter)
    private axios: IAxios
  ) {}

  async createUser(user: User): Promise<any> {
    console.log('==================>>> USER', user);
    await this.axios.post('/create-user', user);
  }
}
