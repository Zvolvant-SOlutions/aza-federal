// AZA Federal — static marketing site served from Cloudflare Workers.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
