<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content">
      <div class="max-w-xl">
        <card />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';

onMounted(() => {
  themeChange(false);
});
</script>