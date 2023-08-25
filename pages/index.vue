<template>
  <div>
    <Header />
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';
import { useGithubStore } from '../store/gh';

import Header from 'components/Header.vue';

const { hello } = useGithubStore();

onMounted(() => {
  themeChange(false);
  hello();
});
</script>