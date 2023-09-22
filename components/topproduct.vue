<script lang="ts" setup>
import { ref } from "vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createVNode, defineComponent } from "vue";
import { Modal } from "ant-design-vue";
let state: {
  src: string;
  fallbackSrc: string;
  jumpToUrl: string;
};
state = {
  src: "https://content.rolex.cn/v7/dam/collection/watches-grid/popin-cards/m126234-0051/m126234-0051_v01.jpg?imwidth=1920",
  fallbackSrc: "https://www.antdv.com/#error",
  jumpToUrl: "https://www.gearpatrol.com/#",
};
const jumpUrl = () => {
  window.open(state.jumpToUrl);
  // Modal.confirm({
  //   title: "Do you Want to delete these items?",
  //   icon: createVNode(ExclamationCircleOutlined),
  //   content: createVNode("div", { style: "color:red;" }, "Some descriptions"),
  //   onOk() {
  //     window.open(state.jumpToUrl);
  //   },
  //   onCancel() {
  //     console.log("Cancel");
  //   },
  //   class: "test",
  // });
};
</script>
<template>
  <div class="box-img">
    <a-image
      :preview="false"
      :width="1920"
      :src="state.src"
      :fallback="state.fallbackSrc"
      @click="jumpUrl"
    />
  </div>
</template>
<style lang="scss" scoped>
.box-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 750px;
}
// .box-img :global(.ant-image-img) {
//   max-width: 100%;
//   max-height: 100%;
// }
</style>
