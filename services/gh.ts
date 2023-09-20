import axios from 'axios';
import { GitHubRepository, Github } from 'types/gh';
import { useRuntimeConfig } from 'nuxt/app';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.PUBLIC_GITHUB_TOKEN,
});

export class GithubService {
  public async getUser() {
    const config = useRuntimeConfig();
    
    const response = await axios<Github>(`${config.public.apiUrl}/users/paulohfsantos`, {
      headers: { Authorization: `token ${config.public.apiSecret}` }
    })

    return response.data;
  }

  public async getReposOctokit() {
    const { data } = await octokit.request('GET /users/{username}/repos', {
      username: 'paulohfsantos'
    });

    return data;
  }

  public async getReposOctokitByName(name: string) {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
      repo: name,
      owner: 'paulohfsantos'
    });

    return data;
  }

  public async getRepos() {
    const config = useRuntimeConfig();
    
    const response = await axios<GitHubRepository[]>(`${config.public.apiUrl}/users/paulohfsantos/repos`, {
      headers: { Authorization: `token ${config.public.apiSecret}` }
    })

    return response.data;
  }
}