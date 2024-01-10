import { User } from '../../domain/User';

export interface IApiGatewayOutBound {
  createUser(user: User): Promise<any>;
}
