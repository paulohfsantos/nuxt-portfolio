export default defineEventHandler((event) => {
  const url = process.env.GH_URL
  const token = process.env.GH_TOKEN
  
  return $fetch(`${url}/users/paulohfsantos`, {
    headers: {
      Authorization: `token ${process.env.GH_TOKEN}`
    }
  })
})