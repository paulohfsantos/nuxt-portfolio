import { AxiosResponse } from 'axios';
import { api } from './api';
import { GitHubRepository, Github } from 'types/gh';

export class GithubService {
  public async getUser(): Promise<AxiosResponse<Github>> {
    const response = await api.get('/api/gh');
    return response.data;
  }

  public async getRepos(): Promise<AxiosResponse<GitHubRepository[]>> {
    const response = await api.get('/api/repos');
    
    return response;
  }
}