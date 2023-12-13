import { io } from 'socket.io-client'
import { defineStore } from 'pinia'

export const useSocket = defineStore('socket', () => {
  let socket = $ref(null)
  let videoDanmuList = $ref([])
  const initialize = () => {
    // 建立传输链接
    socket = io('wss://api.cvweb3.com', {
      reconnectionDelay: 5000, // 重连时的初始延迟
      reconnectionDelayMax: 10000,
      transports: ['websocket', 'polling']
    })
    socket.on('connect', () => {
      console.log('socketio已连接')
    })
    onBulletChat()
  }

  const handleAddDanmu = (data: any) => {
    socket.emit('bulletChat', data)
  }

  const onBulletChat = () => {
    // 监听bulletChat事件
    socket.on('message', (data) => {
      videoDanmuList.push(data)
    })
  }

  return {
    videoDanmuList,
    initialize,
    handleAddDanmu
  }
})
