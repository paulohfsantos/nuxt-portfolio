import { Endpoints } from '@octokit/types';
import { MdiIconString } from 'nuxt-mdi/dist/runtime/components/MdiIcon';

export interface Github {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Github;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  url: string;
  techs: ITech[];
}

export interface ITech {
  name: string;
  icon: MdiIconString;
}

export type UserRepos = Endpoints['GET /users/{username}/repos']['response']['data'];
export type UserRepo = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
export type GithubUser = Endpoints['GET /users/{username}']['response']['data'];
