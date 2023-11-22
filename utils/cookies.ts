export default function (nuxtApp) {
  nuxtApp.provide('clearCookies', () => {
    // 清除 Cookie 的逻辑
    document.cookie.split(';').forEach((c) => {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
    })
  })
}
