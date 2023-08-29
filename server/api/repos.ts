export default defineEventHandler((event) => {
  return $fetch(`https://api.github.com/users/paulohfsantos/repos`)
})