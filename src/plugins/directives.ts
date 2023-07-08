/**
 * Nuxt 会自动读取 plugins 目录中的文件并在创建 Vue 应用程序时加载它们；
你可以在文件名中使用 .server 或 .client 后缀来让插件在 服务器端 或 客户端 加载插件；
 */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('focus', {
        mounted(el) {
            el.focus()
        },
        getSSRProps(binding, vnode) {
            return {}
        },
    })
})