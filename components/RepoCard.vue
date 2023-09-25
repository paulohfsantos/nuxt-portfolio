<template>
  <div
    v-for="repo in repos"
    class="card flex-row justify-between items-center w-96 bg-base-100 shadow-xl p-6"
    :key="repo.id"
  >
    <div class="card-title flex-col items-start">
      <div class="card-title text-lg">{{ repo.name }}</div>

      <div class="text-sm">
        <div class="my-1 divider"></div>
        <div class="flex justify-center items-center">
          <strong>Language:</strong>
          <span class="ml-3" :class="customClassLanguage(repo.language as string)">
            <mdi-icon
              :icon="formatLanguageForMDI(repo.language as MdiIconString)"
            />
          </span>
          <span class="ml-2" v-if="repo.fork">
            <strong>Fork:</strong>
            <div class="ml-2 badge badge-success">{{ repo.fork ? 'Yes' : '' }}</div>
          </span>
        </div>
      </div>
    </div>
    <button @click="redirectToLink(repo.html_url)">
      <mdi-icon icon="mdiOpenInNew" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { customClassLanguage, formatLanguageForMDI } from '../utils/classLang';
import { UserRepos } from '../types/gh';
import { MdiIconString } from "nuxt-mdi/dist/runtime/components/MdiIcon";

defineProps({
  repos: {
    type: Array as PropType<UserRepos>,
    required: true,
  },
});

function redirectToLink(link: string) {
  window.open(link, '_blank');
}
</script>