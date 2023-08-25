import { z } from 'zod';

export const envSchema = z.object({
  GH_URL: z.string(),
  GH_TOKEN: z.string(),
});

export type Env = z.infer<typeof envSchema>;
export const env = envSchema.parse(process.env);