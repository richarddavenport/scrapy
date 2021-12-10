import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-netlify';
// import adapter from "@sveltejs/adapter-node";

export default {
  kit: {
    // ssr: false,
    adapter: adapter(),
    // adapter: adapter({
    //   entryPoint: "src/server.js",
    //   out: "build",
    //   precompress: false,
    //   env: {
    //     port: "PORT",
    //   },
    // }),
    target: '#svelte',
    vite: {
      ssr: {
        external: ['electron', 'ws']
      }
    }
  }
};
