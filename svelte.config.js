import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel(),
    target: '#svelte',
    vite: {
      ssr: {
        noExternal: ["electron"],
        // external: ['whatwg-url', 'node-fetch']
      },
    },
  },
};
