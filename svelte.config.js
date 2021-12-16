import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter(),
    target: '#svelte'
  }
};
