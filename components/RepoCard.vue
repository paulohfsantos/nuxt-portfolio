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
import { UserRepos } from '../types/gh';
import { MdiIconString } from 'nuxt-mdi/dist/runtime/components/MdiIcon';

defineProps({
  repos: {
    type: Array as PropType<UserRepos>,
    required: true,
  },
});

const formatLanguageForMDI = (language: string): MdiIconString => {
  if (!language) { return 'mdiLanguageTypescript' }

  if (language === 'Vue') { return 'mdiVuejs' }

  if (language === 'SCSS') { return 'mdiSass' }

  return `mdiLanguage${language
    .charAt(0)
    .toUpperCase() + language
    .slice(1)
    .toLowerCase()
  }` as MdiIconString;
};

const customClassLanguage = (language: string): string => {
  if (!language) return 'text-base-content'

  return `${language.toLowerCase()}-lang`;
};

// console.log(languages.value);

function redirectToLink(link: string) {
  window.open(link, '_blank');
}
</script>

<style scoped>
.text-base-content {
  color: #3973aa;
}

/* make for typescript, javascript, kotlin and java with their colors */
.typescript-lang {
  color: #3973aa;
}

.javascript-lang {
  color: #f1e05a;
}

.kotlin-lang {
  color: #6c33f1;
}

.java-lang {
  color: #b07219;
}

.vue-lang {
  color: #41b883;
}

.scss-lang {
  color: #c69;
}
</style>