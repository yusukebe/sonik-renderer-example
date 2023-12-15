import { defineConfig } from 'vite'
import sonik from 'sonik/vite'
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '_worker.js'
      }
    }
  },
  plugins: [
    pages({
      entry: './app/server.ts'
    }),
    sonik()
  ]
})
