import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  app: {
    // 过渡效果文档：https://nuxt.com.cn/docs/getting-started/transitions#%E5%B8%83%E5%B1%80%E8%BF%87%E6%B8%A1
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  modules: ['@unocss/nuxt', '@pinia/nuxt'],
  // envDir: '~/xxx',   //指定env文件夹
  // 响应式转换，ref省略.value写法
  experimental: {
    reactivityTransform: true
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        }
      }
    },
    // 不需要ssr渲染的插件
    ssr: {
      noExternal: [
        'moment',
        'naive-ui',
        '@css-render/vue3-ssr',
        'compute-scroll-into-view',
        'lodash-es',
        'dayjs'
      ]
    }
  },
  /**
   *    转为es6 module模块（如果组件库或插件是基于非es6开发的）
   * alias: {
   dayjs: 'dayjs/esm'
   },
   */
  alias: {
    dayjs: 'dayjs/esm'
  },
  build: {
    /**
     * transpile指定哪些插件不被转译
     * 只在build时触发
     * 过滤build时的自动转译，有可能会删除需要转译的插件，所以需要过滤掉。
     */
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'echarts',
            'lodash-es',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
            '@babel/runtime'
          ]
        : ['@juggle/resize-observer', 'lodash-es']
  },
  proxy: {
    '/api/': { target: 'https://api.cvweb3.com', pathRewrite: { '^/api/': '' } }
  }
})
// nuxt.config文档：https://nuxt.com.cn/docs/api/nuxt-config
