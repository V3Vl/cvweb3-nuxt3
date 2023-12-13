// 用户设备信息
import { defineStore } from 'pinia'
import { values } from 'video.js/dist/types/utils/obj'
export const useClient = defineStore(
  'client',
  () => {
    const clientWidth = ref(0)
    const clientType = ref('')

    onMounted(() => {
      clientWidth.value = window.screen.width
      clientType.value = navigator.userAgent.toLocaleLowerCase()
      // clientType.value = (() => {
      //   if (clientWidth.value > 1024) {
      //     return 'PC'
      //   } else if (clientWidth.value > 599 && clientWidth.value <= 1024) {
      //     return 'ipad'
      //   } else {
      //     return 'MOBILE'
      //   }
      // })()
      // console.log(clientWidth.value)
      var browser = {
        versions: (function () {
          var u = navigator.userAgent
          return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1 //是否微信 （2015-01-22新增）
            // qq: u.match(/\sQQ/i) == ' qq' //是否QQ
          }
        })()
        // language: (navigator.browserLanguage || navigator.language).toLowerCase()
      }
      // 键值对写法
      // const trueVal = Object.fromEntries(
      //   Object.entries(browser.versions).filter(([key, val]) => val === true)
      // )
      // 键写法
      const trueVal = Object.keys(browser.versions).filter((key) => browser.versions[key] === true)
      // console.log(browser.versions)
      // console.log(trueVal)
      clientType.value = (() => {
        if (trueVal.includes('ios')) {
          return 'MOBILE'
        } else if (trueVal.includes('android')) {
          return 'MOBILE'
        } else {
          return 'PC'
        }
      })()
    })
    return {
      clientWidth,
      clientType
    }
  },
  { persist: true }
)
