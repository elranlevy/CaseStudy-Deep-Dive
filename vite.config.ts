import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

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
  base: '/CaseStudy-Deep-Dive/',
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      /* ── PNG ────────────────────────────────────────────────── */
      png: {
        quality: 75,          // lossy compression - big savings
        effort: 6,            // higher = slower but smaller (0-10)
      },
      /* ── JPEG (in case any are added later) ─────────────────── */
      jpeg: {
        quality: 75,
        mozjpeg: true,
      },
      /* ── WebP - auto-generated for every PNG/JPEG at build ──── */
      webp: {
        quality: 78,
        effort: 5,
        lossless: false,
      },
      /* ── SVG ────────────────────────────────────────────────── */
      svg: {
        multipass: true,
        plugins: [
          { name: 'preset-default' },
        ],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    /* Increase chunk warning limit - portfolio images are large assets */
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        /* Split vendor JS from app JS */
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['motion'],
        },
      },
    },
  },
})
