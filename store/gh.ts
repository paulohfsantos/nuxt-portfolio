import { ref } from "vue";
import { defineStore } from "pinia";
import { Github, GitHubRepository } from "../types/gh";
import { GithubService } from "../services/gh";

export const useGithubStore = defineStore("github", () => {
  const gh = new GithubService();
  const gh_user = ref("");
  const gh_repos = ref<GitHubRepository[]>([]);

  async function getUser(username: string) {
    const user = await gh.getUser(username);
    gh_user.value = user;
  }

  async function getRepos(username: string) {
    const repos = await gh.getRepos(username);
    gh_repos.value = repos;
  }

  async function hello() {
    const hello = await gh.getHello();
    console.log(hello);
  }

  return {
    gh_user,
    gh_repos,
    getUser,
    getRepos,
    hello,
  };
});