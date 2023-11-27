<script setup lang="ts">
import { ref } from 'vue'
const a = ref(0)
const getVideoData = () => {}
</script>

<template>
  <div mt-30px border wfull flex-col>
    <!-- 视频播放器  -->
    <!-- <div flex="~ col" class="video-player">
        <div class="player relative flex items-center" id="video_wrapper" style="width: 100%; height: 97%"
          >
          <ClientOnly>
            <Player ref="xdclassPlayer" :episode-id="_episodeId" :product-id="realVideoId" :chapter-list="chapterList"
              @get-video-data="getVideoData" />
          </ClientOnly>
        </div>
        <div mt-18px class="danmu">
          <cdn-img class="cursor-pointer h-25px bg-none mr" @click="switchDanmu()"
            src="/" />
          <a-input mr-25px rounded-5px v-model:value="danmuContent"
            placeholder="请输入你要发送的弹幕" />
          <a-button >发送</a-button>
        </div>
      </div> -->
  </div>
</template>

<style lang="scss" scoped></style>
