import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      'cms.shikshacom.com',
      'localhost',
    ],
  },
});
