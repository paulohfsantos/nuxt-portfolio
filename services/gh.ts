import axios from 'axios';
import { api } from './api';

export class GithubService {
  public async getHello() {
    const response = await axios.get('api/hello');
    return response.data;
  }
  public async getUser(username: string) {
    const response = await api.get(`/users/${username}`);
    return response.data;
  }

  public async getRepos(username: string) {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
  }

  public async getRepo(username: string, repo: string) {
    const response = await api.get(`/repos/${username}/${repo}`);
    return response.data;
  }
}