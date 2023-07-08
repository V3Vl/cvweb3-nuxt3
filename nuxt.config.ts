// import Components from 'unplugin-vue-components/vite';
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@unocss/nuxt'],
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    plugins: [
      // Components({
      //   resolvers: [AntDesignVueResolver()],
      // }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'
        }
      }
    }
  },
  unocss: {
    uno: true,
    attributify: true,
    shortcuts: [{ flexc: 'flex items-center justify-center' }],
    rules: [
      [
        /^wh-(\d+)$/,
        ([, d]) => ({
          width: `${d}px`,
          height: `${d}px`,
        }),
      ],
    ],
  },
  // experimental: {
  //   reactivityTransform: true,
  // },
  // vite: {
  //   plugins: [
  //     Components({
  //       resolvers: [AntDesignVueResolver()],
  //     }),
  //   ],
  // },
});

