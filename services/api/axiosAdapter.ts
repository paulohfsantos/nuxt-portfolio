import { api } from './index';
import { HttpClient } from './httpClient';

export class AxiosAdapter implements HttpClient {
  public async get<T>(url: string): Promise<T> {
    const response = await api.get(url);
    return response.data;
  }
}