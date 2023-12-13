<script setup lang="ts">
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import vueDanmaku from 'vue3-danmaku/dist/vue3-danmaku.esm'
import { listByEpisodeId, addDanmu } from '~/api/bulletScreen'
import { add } from '~/api/account'

const { productId, episodeId, chapterList } = defineProps<{
  productId: number
  episodeId: number
  chapterList: any
}>()

let danmuList = $ref([])
let danmuTimer = $ref<NodeJS.Timer>() // 弹幕定时器
let oVideoPlayer: HTMLVideoElement
let danmakuRef = $ref<InstanceType<typeof vueDanmaku>>() // 弹幕插件
/**
 * 弹幕逻辑
 */
let { global } = $(useDanmuState())
async function getDanmuData(push?: boolean) {
  if (!global) return
  const currentTime = Math.floor(oVideoPlayer.currentTime)
  if (!push) {
    // 初始弹幕
    danmuList = (
      await listByEpisodeId({
        productId: productId,
        episodeId: episodeId,
        endTime: currentTime + 10,
        beginTime: currentTime
      })
    ).data
  } else {
    // 弹幕增加
    await listByEpisodeId({
      productId: productId,
      episodeId: episodeId,
      endTime: currentTime + 10,
      beginTime: currentTime
    }).then((item) => {
      item.data.map((subItem) => danmakuRef.push(subItem))
    })
  }
}
/**
 *
 * @param 实例化视频播放器
 */
let speed = false
let oVideo: HTMLVideoElement // 获取video DOM
let oDanmu: HTMLDivElement // 获取弹幕 DOM
let myPlay: any = $ref(null)
let init = $ref(false) // 控制弹幕展示时机
let player: videojs.Player | null = null
// 获取缓存中的播放速度，否则为1
let playBackRate = $ref(
  process.client
    ? localStorage.getItem('playBackRate')
      ? Number(localStorage.getItem('playBackRate'))
      : 1
    : 1
)
let newPlayer = async (playSrc: string) => {
  if (process.server) return
  if (!player) {
    await import('videojs-hotkeys')
    player = videojs(myPlay, {
      controls: true, // 控制器
      fill: true, // 填充模式
      playbackRates: [0.5, 1, 1.25, 1.5, 2.0],
      // 键盘事件
      plugins: {
        hotkeys: {
          volumeStep: 0.1,
          seekStep: 5,
          enableModifiersForNumbers: false
        }
      }
    })
    init = true

    player.on('play', onPlayerPlay) // 播放器开始
    player.on('pause', onPlayerPause) // 播放器暂停
    player.on('loadedmetadata', onPlayerReady) // 播放器加载完成
    player.on('ended', nextEpisode) // 播放器结束
    player.on('seeked', onPlayerSeeked) // 手动选择进度
    // 视频尺寸改变，重新计算滚动距离
    player.on('fullscreenchange', () => {
      oDanmu.style.width = `${oVideoPlayer.offsetWidth}px`
      oDanmu.style.height = `${oVideoPlayer.offsetHeight}px`
      danmakuRef.resize()
    })
    // 改变播放速度
    player.on('ratechange', () => {
      if (speed) {
        process.client && localStorage.setItem('playBackRate', player.playbackRate().toString())
        playBackRate = player.playbackRate()
      }
    })
  }
  speed = false
  player.src({
    src: playSrc,
    type: 'application/x-mpegURL' // 流设置: m3u8
  })
}

const onPlayerSeeked = async function () {
  if (danmuTimer) clearInterval(danmuTimer)
  danmuList = []
  danmakuRef.stop()
  danmakuRef.reset()
  await getDanmuData()
  danmakuRef.play()

  danmuTimer = setInterval(async () => {
    await getDanmuData(true)
  }, 10 * 1000)
}

// 当播放器暂停的时候弹幕暂停
const onPlayerPause = function () {
  console.log('暂停1', danmuTimer)
  if (danmuTimer) clearInterval(danmuTimer)
  danmakuRef?.pause()
  console.log('暂停2', danmuTimer)
}

// 当播放器播放时候渲染弹幕
const onPlayerPlay = function () {
  if (danmuTimer) clearInterval(danmuTimer)
  danmuTimer = setInterval(async () => {
    await getDanmuData(true)
  }, 10 * 1000)
  danmakuRef?.play()
}
const onPlayerReady = async function () {
  oVideo = document.querySelector('.vjs-tech') as HTMLVideoElement
  oVideoPlayer = document.querySelector('#video_wrapper div video') as HTMLVideoElement

  await getDanmuData()
  oDanmu = document.querySelector('#_danmu') as HTMLDivElement

  // 设置弹幕的显示位置
  nextTick(() => {
    oDanmu.style.width = `${oVideo.offsetWidth}px`
    oDanmu.style.height = `${oVideo.offsetHeight}px`
    oDanmu.style.top = '0'
    oDanmu.style.left = '0'
    oDanmu.style.zIndex = '1000'
    oDanmu.style.position = 'absolute'
    oDanmu.style.pointerEvents = 'none'
  })
  // 视频自动播放
  // player.play()
  // // 设置播放速度
  player.playbackRate(playBackRate)
  speed = true
}
function nextEpisode() {
  console.log('结束了')
}
const { personalInfo } = $(useUser())
// 监听弹幕开关变量控制显示隐藏
watch(
  () => global,
  (val) => {
    val ? danmakuRef.show() : danmakuRef.hide()
  }
)
// 监听videoDanmuList数据变化，增加弹幕
const { videoDanmuList, handleAddDanmu } = $(useSocket())
watch(
  () => videoDanmuList.length,
  () => {
    console.log('66666666666')
    videoDanmuList.forEach((item) => {
      danmakuRef.add(item)
    })
    videoDanmuList.length = 0
  }
)
// 发送弹幕
const { isLogin } = $(useUser())
const { loginModel } = $(useModel())
const sendDanmu = async function (danmuContent: string) {
  if (isLogin) {
    if (!danmuContent) {
      console.log('没输入内容')
      return
    }
  } else {
    loginModel.base = true
  }
  const params = {
    productId: productId,
    episodeId: episodeId,
    content: danmuContent,
    playTime: oVideoPlayer.currentTime + Math.random() / 0.5
  }
  // 增加弹幕接口
  const data = await addDanmu(params)
  console.log('params>>', data)
  if (data.code === 0) {
    // socketio增加实时弹幕api
    handleAddDanmu({
      content: danmuContent,
      channel: 'video',
      playTime: 0,
      accountId: personalInfo.id,
      head_img: personalInfo.head_img
    })
  }
}

let timer = $ref<NodeJS.Timer>()
onMounted(() => {
  timer = setInterval(() => {
    if (oVideoPlayer && !oVideoPlayer.paused) {
      add({
        productId: productId,
        episodeId: episodeId,
        duration: Math.floor(oVideoPlayer.currentTime)
      })
    }
  }, 10 * 1000)
})

onBeforeUnmount(() => {
  if (player) player.dispose()
  if (danmuTimer) clearInterval(danmuTimer)
})

// 抛出实例化方法 让父组件获取到该子组件的newPlayer方法
defineExpose({ newPlayer, sendDanmu })
</script>

<template>
  <div class="vbox" style="position: relative; width: 100%; height: 100%">
    <div class="video">
      <Teleport v-if="init" to=".video-js">
        <div id="_danmu">
          <vueDanmaku
            border
            style="width: 100%; height: 100%"
            ref="danmakuRef"
            v-model:danmus="danmuList"
            :channels="5"
            :autoplay="false"
            :speeds="160"
            useSlot
          >
            <template v-slot:dm="{ danmu }">
              <div flex items-center>
                <img :src="danmu.head_img" wh-25 rounded-full />
                <span class="TEXT" :class="danmu.style">{{ danmu.content }}</span>
              </div>
            </template>
          </vueDanmaku>
        </div>
      </Teleport>
      <video
        rounded-15px
        ref="myPlay"
        controls
        class="video-js vjs-default-skin vjs-big-play-centered"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  // margin: 0 auto;
  .vjs-tech {
    width: 100%;
    height: 100%;
  }
  // margin-left: 100px;
  .danmu {
    box-sizing: border-box;
    width: 100%;
    height: 2.6rem;
  }
}
</style>
