<script setup lang="ts">
import { getVideo } from '~/api/video'
let _episodeId = $ref(1)
let realVideoId = $ref(1)
const getTest = async () => {
  await getVideoData(_episodeId)
}
// 视频源
const indexPlayer = $ref<{
  newPlayer: (playSrc: string) => void
  sendDanmu: (playSrc: string) => void
}>()
const getVideoData = async (id?: number) => {
  const res = await getVideo({ episodeId: id })
  if (res.code === 0) {
    _episodeId = id
    // clickChose && navigateTo(`videoPlayPage?id=${realVideoId}&eid=${id}`)
    indexPlayer?.newPlayer(res.data.playResult)
  }
}
// 发送弹幕
// const _global = ref(false)
let { global } = $(useDanmuState())
const switchDanmu = (value: boolean) => {
  global = value
}
let danmuContent = $ref('')
function sendDanmu() {
  indexPlayer.sendDanmu(danmuContent)
  danmuContent = ''
}
onMounted(() => {
  getTest()
})
</script>

<template>
  <div class="vbox" flexc>
    <HotNews></HotNews>
    <div
      rounded-10px
      flex="~ col"
      class="video-box player relative flex items-center"
      id="video_wrapper"
      p-10px
      style="width: 816px; height: 100%"
    >
      <ClientOnly>
        <VideosPlayer
          ref="indexPlayer"
          :episodeId="_episodeId"
          :product-id="realVideoId"
          :chapter-list="[]"
          @get-video-data="getVideoData"
        ></VideosPlayer>
      </ClientOnly>
      <div class="danmu" flexb>
        <n-switch v-model:value="global" size="medium" @update:value="switchDanmu">
          <template #icon> 🤔 </template>
        </n-switch>
        <n-input
          style="width: 78%"
          @keypress.enter.native="sendDanmu()"
          v-model:value="danmuContent"
        ></n-input>
        <n-button style="background-color: #fff" @click="sendDanmu">发送弹幕</n-button>
      </div>
    </div>
    <!-- <div class="other-content" border text-center>
      <h2>弹幕功能依然存在一些小问题待修复</h2>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.vbox {
  flex-wrap: wrap;
  height: 500px;
  .video-box {
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
  }
  .danmu {
    flex: 1;
    width: 100%;
  }
}
</style>
