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
  <div class="vbox relative" flexc>
    <HotNews></HotNews>
    <div
      id="video_wrapper"
      class="video-box player relative items-center"
      rounded-10px
      flex="~ col"
      p-10px
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
  </div>
</template>

<style lang="scss" scoped>
.vbox {
  padding: 2px 0;
  @media screen and (min-width: 600px) {
    height: 520px;
  }
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    height: 1000px;
  }

  .video-box {
    // box-sizing: border-box;
    width: 816px;
    height: 500px;
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
