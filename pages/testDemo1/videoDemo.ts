import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// 原始 创建播放工具类
let player: videojs.Player
function newVideoPlayer() {
  if (process.server) return
  if (!player) {
    player = videojs('video_player', {
      controls: true, //控制器
      fill: true, //填充模式
      playerbackRates: [0.5, 1, 1.25, 1.5, 1.75, 2.0] //播放倍速
    })
  }
  player.src({
    src: '', // 播放地址
    type: 'application/x-mpegURL' //流设置：m3u8
  })
}
