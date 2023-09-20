import { useRuntimeConfig } from 'nuxt/app';

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const url = `${config.apiUrl}/users/paulohfsantos`;
  const token = config.public.apiSecret;

  return $fetch(`${url}/users/paulohfsantos`, {
    headers: { Authorization: `token ${token}` }
  })
})