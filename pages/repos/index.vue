<template>
  <section class="flex justify-center min-h-screen bg-base-200">
    <div class="hero-content">
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          <repo-card :repos="repos_data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { UserRepos } from '../../types/gh';
import { useGithubStore } from '../../store/gh';

const { getReposOctokit } = useGithubStore();

const repos_data = ref<UserRepos>([]);

getReposOctokit().then((res) => {
  repos_data.value = res;
})
</script>