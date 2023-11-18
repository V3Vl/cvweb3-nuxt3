<script lang="ts" setup>
import { message } from 'ant-design-vue'
</script>

<template>
  <div class="footer">
    <div wfull flexc>
      <div w-1200px class="grid-three footer-href">
        <a @click="message.warn('敬请期待')">链接1</a>
        <a @click="message.warn('敬请期待')">链接2</a>
        <a @click="message.warn('敬请期待')">链接3</a>
        <a @click="message.warn('敬请期待')">链接4</a>
      </div>
    </div>
    <a-divider />
    <div class="copyright">
      Copyright © 2023 Company,lnc.
      <a href="https://www.beian.gov.cn/"> &nbsp;桂ICP备12345678号&nbsp; </a>
      Terms
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  // 待优化 隐藏页面滚动条后 取消绝对定位
  // position: absolute;
  // bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f1efef;

  .footer-href a:hover {
    color: #f38e48;
  }

  :deep(.ant-divider-horizontal) {
    margin: 5px 0;
  }

  .grid-three {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 163px;
      height: 80px;
      flex-shrink: 0;
    }

    .footer-href {
      flex-shrink: 0;
    }

    .footer-qr {
      flex-shrink: 0;
    }
  }

  .copyright {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 12px;
    color: #7f7f7f;

    a {
      color: #7f7f7f;

      &:hover {
        color: #f38e48;
      }
    }
  }
}
</style>
