<template>
  <div>
    <app-header />
    
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content">
        <div class="max-w-xl">
          <!-- <card :items="repos" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { themeChange } from 'theme-change';
import { useGithubStore } from '../store/gh';
import { storeToRefs } from 'pinia';

const store = useGithubStore();
onMounted(() => {
  themeChange(false);
  store.getUser().then((res) => {});
});
</script>