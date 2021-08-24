let url

if (Boolean(process.env.FROM_DOCKER)) {
  url = `http://basic-app:8000/api/`
} else {
  url = 'http://localhost:8000/api/'
}


export const baseUrl = url
