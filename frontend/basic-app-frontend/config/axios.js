import axios from 'axios'
import { baseUrl } from './baseUrl'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
})

const invoke = async (url, method = "get", data = {}, csrf = "") => {
  if (method !== "get") {
    instance.defaults.withCredentials = true
  }

  return instance({
    method: method,
    url: url,
    data: data,
    headers: {
      ...instance.defaults.headers,
      "X-CSRFToken": csrf,
    },
  })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error))
}

// Promises

const getPosts = async () => {
  return invoke()
}

export {
  getPosts,
}