import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:"https://mern-azure-app-dwgtcbhze3cxgjh7.southindia-01.azurewebsites.net:4000"
      }
    }
  }
})
