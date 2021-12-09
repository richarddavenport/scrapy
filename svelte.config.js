// import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter(),
    target: '#svelte',
    // vite: {
    //   ssr: {
    //     // noExternal: ["electron"],
    //     external: ['electron', 'ws']
    //   }
    // }
  }
};
