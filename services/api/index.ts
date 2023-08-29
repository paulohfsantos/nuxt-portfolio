import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.GH_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${process.env.GH_TOKEN}`,
  },
});