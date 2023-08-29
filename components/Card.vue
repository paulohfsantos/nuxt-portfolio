<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img :src="avatar_url" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>{{ bio }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { GitHubRepository } from 'types/gh';

defineProps({
  login: {
    type: String,
    required: false,
  },
  avatar_url: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  items: {
    type: Array as PropType<GitHubRepository[]>,
    required: true,
  },
});
</script>