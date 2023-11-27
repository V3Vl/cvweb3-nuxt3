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
        resolvers: [AntDesignVueResolver({ importStyle: 'css', resolveIcons: true })]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        }
      }
    },
    // 不需要ssr渲染的插件
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue', 'lodash-es', 'dayjs']
    }
  },
  // 将dayjs改为es6 module模块（因为antd底层使用了dayjs）
  alias: {
    dayjs: 'dayjs/esm'
  },
  build: {
    // transpile是过滤打包优化，因为打包时自动优化会删除一些插件，transpile指定哪些插件不被优化
    // 打包构建使用这个配置
    // transpile: ['lodash-es', '@babel/runtime']
    // 本地启动使用这个配置
    transpile: ['lodash-es']
  }
})
