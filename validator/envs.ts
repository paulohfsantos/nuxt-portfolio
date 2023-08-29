import { z } from 'zod';

const envSchema = z.object({
  GH_URL: z.string(),
  GH_TOKEN: z.string(),
});

type Env = z.infer<typeof envSchema>;
// export const env = envSchema.parse(process.env) as Env;

export const validateEnv = (): Env => {
  try {
    const schema = envSchema.parse(process.env);
    return schema as Env;
  } catch (error) {
    throw new Error('Config validation error');
  }
};

export const env = validateEnv();