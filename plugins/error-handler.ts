// Vue 渲染生命周期时的错误；页面中使用onErrorCaptured生命周期进行捕获；
export default defineNuxtPlugin((nuxtApp) => {
  // 方式1
  // nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
  //   // 处理错误，例如上报到一个服务
  // }

  // 方式2
  // vue:error 钩子基于 onErrorCaptured 生命周期钩子。
  nuxtApp.hook('vue:error', (error, instance, info) => {
    // 处理错误，例如上报到一个服务
  })
})
