<template>
  <div
    v-for="project in projects"
    :key="project.id"
    class="card flex-row justify-between items-center w-96 bg-base-100 shadow-xl p-6"
  >
    <div class="card-title flex-col items-start">
      <h3 class="card-title text-lg">{{ project.name }}</h3>

      <div class="text-sm">
        <div class="my-1 divider"></div>
        <div class="flex justify-center items-center">
          <span>Technologies:</span>
          <span
            v-for="tech in project.techs"
            :key="tech.name"
            :class="customClassLanguage(tech.name)"
            class="ml-3"
            :title="tech.name"
          >
            <mdi-icon :icon="tech.icon" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProject } from '../types/gh';
import { customClassLanguage } from '../utils/classLang';

defineProps({
  projects: {
    type: Array as PropType<IProject[]>,
    required: true,
  },
});
</script>