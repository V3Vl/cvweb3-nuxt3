<script setup lang="ts">
import { getVideo } from '~/api/video'
let _episodeId = $ref(1)
const testv = async () => {
  await getVideoData(_episodeId)
}

const getVideoData = async (id?: number, clickChose?: boolean) => {
  const res = await getVideo({ episodeId: id })
  // if (res.code === 0) {
  //   _episodeId = id
  //   clickChose && navigateTo(`videoPlayPage?id=${realVideoId}&eid=${id}`)
  //   xdclassPlayer?.newPlayer(res.data.playResult)
  // }
}
</script>

<template>
  <div border>
    <h2>【一些内容】</h2>
    <h2>【这里将会有一个视频+弹幕】</h2>
    <n-button @click="testv">测试</n-button>
  </div>
</template>

<style lang="scss" scoped></style>
