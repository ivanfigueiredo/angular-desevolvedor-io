export interface IAxios {
  post<T, D>(url: string, body: D): Promise<T>;
  get<P, T>(params?: P): Promise<T>;
}
