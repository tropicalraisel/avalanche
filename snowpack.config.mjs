// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    src: { url: '/' },
    public: { url: '/', static: true, resolve: false }
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    NODE_ENV: true,
    source: 'remote'
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    clean: true
  },
};
