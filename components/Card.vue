<template>
  <div class="card w-96 bg-base-100 shadow-xl" v-if="user_data">
    <img class="w-full" :src="user_data.avatar_url" alt="img_avatar" />
    <div class="card-body">
      <h2 class="card-title">{{ user_data.name }}</h2>
      <p class="flex"> <mdi-icon class="ml-0 mr-2" icon="mdiInformation" /> {{ user_data.bio }}</p>
      <p class="flex"> <mdi-icon class="ml-0 mr-2" icon="mdiPin" /> {{ user_data.location }}</p>
      <div class="mt-3">
        <span>socials:</span>
        <ul class="flex mt-1">
          <li class="mr-2">
            <a :href="user_data.html_url" target="_blank" title="github repository">
              <mdi-icon icon="mdiGithub" />
            </a>
          </li>
          <li class="mr-2">
            <a :href="`https://${user_data.blog}`" target="_blank" title="linkedin">
              <mdi-icon icon="mdiLinkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div class="card-actions justify-end">
        <button @click="goTo('/projects')" class="btn btn-primary">
          Projects
        </button>
        <button @click="goTo('/repos')" class="btn btn-secondary">
          Repositories
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Github } from '../types/gh';
import { useRouter } from 'vue-router';
import { useGithubStore } from '../store/gh';

const router = useRouter();
const { getUser } = useGithubStore();
const user_data = ref<Github>();

getUser().then((res) => {
  user_data.value = res;
})

function goTo(route: string) {
  router.push(route);
}
</script>