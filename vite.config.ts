import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');  // تغيير '.' إلى process.cwd() للدقة

  return {
    base: '/cyberfortify/',  // مهم جداً للروابط على GitHub Pages (اسم الريبو)
    
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    
    plugins: [react()],
    
    define: {
      // كفاية سطر واحد، واستخدم globalThis أو process.env مباشرة في الكود
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),  // الأفضل يكون './src' مش '.' عشان يشير لمجلد المصدر
      },
    },
  };
});
