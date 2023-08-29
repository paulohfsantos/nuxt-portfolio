<template>
  <div class="p-3 navbar bg-base-100">
    <div class="flex-1">
      <nuxt-link class="btn btn-ghost btn-sm rounded-btn" to="/">Barber Shop</nuxt-link>
    </div>
    <div class="flex-none">
      <div class="px-3">
        <select data-choose-theme class="select select-bordered w-full max-w-xs select-sm">
          <option v-for="theme in themes" :value="theme" :key="theme">
            {{ theme }}
          </option>
        </select>
      </div>
      
      <UserSettings
        :username="user.username"
        :email="user.email"
        @logout="logoutUser"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { themeChange } from 'theme-change';
import { themes } from '../utils/themes';

import UserSettings from './UserSettings.vue';

onMounted(() => {
  themeChange(false);
});

const user = {
  username: 'John Doe',
  email: 'mail@mail.com',
};

const logoutUser = () => {
  console.log('logged off');
};
</script>