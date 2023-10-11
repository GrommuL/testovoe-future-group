export const envConfig = {
  BASE_URL: import.meta.env.VITE_APP_BASE_URL as string,
  API_KEY: import.meta.env.VITE_APP_API_KEY as string
} as const
