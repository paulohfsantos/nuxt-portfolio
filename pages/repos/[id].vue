<template>
  <div>
    repos id: {{ id }} view
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const id = router.currentRoute.value.params.id;
</script>