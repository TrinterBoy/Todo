import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export interface IRequest extends AxiosRequestConfig {}

export class HttpService {
    public fetchingService = axios;

    private baseUrl = 'http://localhost:5000';
    private apiVersion = 'api';

    private getFullApiUrl(url: string) {
      return `${this.baseUrl}/${this.apiVersion}/${url}`;
    }

    private populateTokenToHeaderConfig() {
      return {
        Authorization: localStorage.getItem('token')!,
      };
    }

    private extractUrlFromConfig(config: IRequest) {
      delete config.url;
      return config;
    }

    public delete(config: IRequest, withAuth = false) {
      if (withAuth) {
        config.headers = {
          ...config.headers,
          ...this.populateTokenToHeaderConfig(),
        };
      }

      return this.fetchingService({
        method: 'DELETE',
        url: this.getFullApiUrl(config.url!),
        ...this.extractUrlFromConfig(config),
      });
    }

    public post(config: IRequest, withAuth = false) {
      if (withAuth) {
        config.headers = {
          ...config.headers,
          ...this.populateTokenToHeaderConfig(),
        };
      }

      return this.fetchingService({
        method: 'POST',
        url: this.getFullApiUrl(config.url!),
        ...this.extractUrlFromConfig(config),
      });
    }

    public get(config: IRequest, withAuth = false) {
      if (withAuth) {
        config.headers = {
          ...config.headers,
          ...this.populateTokenToHeaderConfig(),
        };
      }
      return this.fetchingService({
        method: 'GET',
        url: this.getFullApiUrl(config.url!),
        ...this.extractUrlFromConfig(config),
      });
    }

    public put(config: IRequest, withAuth = false) {
      if (withAuth) {
        config.headers = {
          ...config.headers,
          ...this.populateTokenToHeaderConfig(),
        };
      }

      return this.fetchingService({
        method: 'PUT',
        url: this.getFullApiUrl(config.url!),
        ...this.extractUrlFromConfig(config),
      });
    }
}
