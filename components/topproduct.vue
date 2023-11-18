<script lang="ts" setup>
let state: {
  src: string
  fallbackSrc: string
  jumpToUrl: string
}
state = {
  // 罗意威list
  // https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880x1620_10.jpg
  // https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_THEMES_RGB_CROPPED_2880X1620_38.jpg
  // https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2250x3000_28.jpg
  src: 'https://www.loewe.com.cn/media/wysiwyg/2024/ss24-preco/LOEWE_SS24_PRECO_GIFTING_STILL_LIFE_RGB_CROPPED_2880X1620_33.jpg',
  // src: "https://content.rolex.cn/v7/dam/new-watches/2023/family-collection/cosmograph-daytona/landing-page/professional-watches-cosmograph-daytona-chronometric-precision_m126506-0001_2301ac_002.jpg?imwidth=1920",
  fallbackSrc: 'https://www.antdv.com/#error',
  jumpToUrl: ''
}
const jumpUrl = () => {
  // window.open(state.jumpToUrl);
}
</script>
<template>
  <div class="box-img">
    <img :preview="false" :src="state.src" :fallback="state.fallbackSrc" @click="jumpUrl" />
  </div>
</template>
<style lang="scss" scoped>
.box-img {
  background-color: #f2f4f5;
  height: 75vh;
  // position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // overflow: hidden;
  width: 100%;

  img {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
}

// .box-img :global(.ant-image-img) {
//   max-width: 100%;
//   max-height: 100%;
// }
.box-menu {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 100px;
  min-width: 200px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #fff;
}
</style>
