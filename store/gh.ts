import { Github, GitHubRepository } from "../types/gh";
import { GithubService } from "../services/gh";

export const useGithubStore = defineStore("github", () => {
  const gh = new GithubService();
  
  const gh_user = ref<Github | unknown>();
  const gh_repos = ref<GitHubRepository[] | unknown>([]);

  function setUser(user: Github) {
    gh_user.value = user;
  }

  function setRepos(repos: GitHubRepository[]) {
    gh_repos.value = repos;
  }

  async function getUser() {
    const user = await gh.getUser();
    gh_user.value = user;

    return user;
  }

  async function getRepos() {
    const repos = await gh.getRepos();
    gh_repos.value = repos;

    return repos;
  }

  async function getReposOctokit() {
    const repos = await gh.getReposOctokit();
    gh_repos.value = repos;

    return repos;
  }

  async function getReposOctokitByName(name: string) {
    const repos = await gh.getReposOctokitByName(name);
    gh_repos.value = repos;

    return repos;
  }

  return {
    gh_user,
    gh_repos,
    setRepos,
    setUser,
    getUser,
    getRepos,
    getReposOctokit,
    getReposOctokitByName
  };
});