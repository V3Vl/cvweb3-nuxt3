<script setup lang="ts">
import type { DrawerPlacement } from 'naive-ui'
const { personalInfo } = $(useUser())
const { clientType } = $(useClient())
const placement = ref<DrawerPlacement>('right')
const active = ref(false)
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
const content = ref(null)
const send = function () {
  console.log(content.value)
}
console.log('type', clientType)
</script>

<template>
  <div class="support-box" @click="activate('right')">客服</div>
  <n-drawer
    v-model:show="active"
    :width="clientType === 'MOBILE' ? '100%' : '50%'"
    :placement="placement"
  >
    <n-drawer-content title="客服小贝" closable>
      <h2 ml-10 mt-60>这是一个待实现的功能</h2>
      <template #footer>
        <div style="width: 100%" flexb>
          <n-input
            :autosize="{
              minRows: 3
            }"
            style="width: 80%"
            v-model:value="content"
            type="textarea"
            placeholder="您想咨询什么?"
          />
          <n-button type="info" @click="send">发送</n-button>
        </div>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<style lang="scss" scoped>
.support-box {
  position: fixed;
  bottom: 10%;
  left: 10px;
  height: 70px;
  width: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: 70px;
  background-color: blueviolet;
  cursor: pointer;
}
.n-drawer {
  background-color: red;
}
</style>
