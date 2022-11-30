import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

const pathMapping = {
  demo: './build-demo',
  dev: './build-dev',
  production: './build-production'
} as { [key: string]: string }

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react(), eslint(), tsconfigPaths()],
    build: {
      outDir: pathMapping[mode] ?? './dist'
    }
  })
}
