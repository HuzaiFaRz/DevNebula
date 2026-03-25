import { defineConfig } from 'vite'

export default defineConfig({
  // This tells Vite to treat these as binary assets, not code
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr'],
})