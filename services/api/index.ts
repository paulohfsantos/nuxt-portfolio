import axios from 'axios';
import { env } from '../../validator/envs';

export const api = axios.create({
  baseURL: env.GH_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${env.GH_TOKEN}`,
  },
});