import axios from 'axios';
import { Injectable } from '@angular/core';
import { IAxios } from './IAxios';

@Injectable()
export class AxiosAdapter implements IAxios {
  private baseUrl = 'http://localhost:5555';

  async post<T, D>(url: string, body: D): Promise<T> {
    const output = await axios.post<T>(this.baseUrl + url, {
      body,
    });

    return output.data;
  }

  async get<P, T>(params?: P | undefined): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
