<template>
  <section class="flex justify-center min-h-screen bg-base-200">
    <div>
      <div class="w-full my-2 flex justify-center items-center">
        <h1 class="text-lg font-bold text-center">Most recent projects</h1>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <project-card :projects="projects"  />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IProject } from '../../types/gh';

const projects = ref<IProject[]>([
  {
    id: 1,
    name: 'Schedule API',
    description: 'Api service for schedule app',
    url: 'https://github.com/paulohfsantos/schedule-api',
    techs: [
      { name: 'Kotlin', icon: 'mdiLanguageKotlin' },
      { name: 'PostgreSQL', icon: 'mdiDatabase' },
      { name: 'Spring-Boot', icon: 'mdiLeafCircle' },
      { name: 'Docker', icon: 'mdiDocker' }
    ],
  },
  {
    id: 2,
    name: 'Portfolio Nuxt 3',
    description: 'Portfolio made with Nuxt 3',
    url: 'https://github.com/paulohfsantos/nuxt-portfolio',
    techs: [
      { name: 'Nuxt', icon: 'mdiNuxt' },
      { name: 'TypeScript', icon: 'mdiLanguageTypescript' },
      { name: 'Tailwind', icon: 'mdiTailwind' }
    ],
  },
  {
    id: 3,
    name: 'Barbershop API',
    description: 'Api service for barbershop app',
    url: 'https://github.com/paulohfsantos/barbershop-kt',
    techs: [
      { name: 'Kotlin', icon: 'mdiLanguageKotlin' },
      { name: 'PostgreSQL', icon: 'mdiDatabase' },
      { name: 'Spring-Boot', icon: 'mdiLeafCircle' },
      { name: 'Docker', icon: 'mdiDocker' }
    ],
  },
  {
    id: 4,
    name: 'Barbershop API',
    description: 'Front-end for Olympic Winners list rendering',
    url: 'https://github.com/paulohfsantos/olympic-winners-ts',
    techs: [
      { name: 'React', icon: 'mdiReact' },
      { name: 'TypeScript', icon: 'mdiLanguageTypescript' },
      { name: 'Tailwind', icon: 'mdiTailwind' }
    ],
  },
]);
</script>