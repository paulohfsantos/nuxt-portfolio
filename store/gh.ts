import { Github, GitHubRepository } from "../types/gh";
import { GithubService } from "../services/gh";
import { acceptHMRUpdate } from "pinia";

export const useGithubStore = defineStore("github", () => {
  const gh = new GithubService();
  
  const gh_user = ref<Github>({
    avatar_url: "",
    bio: "",
    blog: "",
    company: "",
    created_at: "",
    email: "",
    events_url: "",
    followers: 0,
    followers_url: "",
    following: 0,
    following_url: "",
    gists_url: "",
    gravatar_id: "",
    hireable: false,
    html_url: "",
    id: 0,
    location: "",
    login: "",
    name: "",
    node_id: "",
    organizations_url: "",
    public_gists: 0,
    public_repos: 0,
    received_events_url: "",
    repos_url: "",
    site_admin: false,
    starred_url: "",
    subscriptions_url: "",
    twitter_username: "",
    type: "",
    updated_at: "",
    url: "",
  });
  const gh_repos = ref<GitHubRepository[]>([]);

  async function getUser() {
    const user = await gh.getUser();
    console.log(user);
    gh_user.value = user.data;

    return user.data;
  }

  async function getRepos() {
    const repos = await gh.getRepos();
    console.log(repos);
    gh_repos.value = repos.data;

    return repos.data;
  }

  return {
    gh_user,
    gh_repos,
    getUser,
    getRepos,
  };
});

// if (import.meta.hot) {
//   import.meta.hot.accept(
//     acceptHMRUpdate(useGithubStore, import.meta.hot),
//   )
// }