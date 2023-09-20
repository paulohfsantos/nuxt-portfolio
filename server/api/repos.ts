import { useRuntimeConfig } from 'nuxt/app';

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const url = `${config.public.apiUrl}/users/paulohfsantos`;
  const token = config.public.apiSecret;

  return $fetch(`${url}/users/paulohfsantos/repos`, {
    headers: { Authorization: `token ${token}` }
  })
})