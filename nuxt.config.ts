import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt'],
  // 响应式转换，ref省略.value写法
  experimental: {
    reactivityTransform: true
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true })]
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
  // 已抽离至unocss.config.ts
  // unocss: {
  //   uno: true,
  //   attributify: true,
  //   shortcuts: [
  //     { flexc: "flex items-center justify-center" },
  //     { bd: "border" },
  //   ],
  //   rules: [
  //     [
  //       /^fs-(\d+)$/,
  //       ([, d]) => ({
  //         "font-size": `${d}px`,
  //       }),
  //     ],
  //     [/^p-(\d+)$/, (match) => ({ padding: `${match[1]}px` })],
  //   ],
  // },
})
