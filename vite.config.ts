import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Resolves Figma Make's `figma:asset/<hash>.png` imports to local `src/assets/<hash>.png`.
 * This allows the project to build standalone outside the Figma Make environment.
 */
function figmaAssetResolver(): Plugin {
  return {
    name: 'figma-asset-resolver',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '');
        return path.resolve(__dirname, './src/assets', filename);
      }
    },
  };
}

export default defineConfig({
  base: '/MyPortfolio/',
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
