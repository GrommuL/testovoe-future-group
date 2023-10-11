import axios from 'axios'
import { envConfig } from '../env-config/env-config'

export const instance = axios.create({
  baseURL: envConfig.BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})
