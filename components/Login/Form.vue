<script setup lang="ts"></script>

<template>
  <div p="t-6px b-20px r-10px l-10px" flexc>
    <div w="34%" h-50 class="login-type" flex>
      <div>
        <a-button>
          <template #icon><wechat-outlined /></template>
          Sign in WeChat
        </a-button>
      </div>
      <div>
        <a-button>
          <template #icon><google-outlined /></template>
          Sign in google
        </a-button>
      </div>
      <div>
        <a-button>
          <template #icon><facebook-outlined /></template>
          Sign in Facebook
        </a-button>
      </div>
      <div>
        <a-button>
          <template #icon><twitter-outlined /></template>
          Sign in twitter
        </a-button>
      </div>
      <!-- <div>
        <script src="https://accounts.google.com/gsi/client" async></script>
        <div
          id="g_id_onload"
          data-client_id="YOUR_GOOGLE_CLIENT_ID"
          data-login_uri="https://your.domain/your_login_endpoint"
          data-auto_prompt="false"
        ></div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="medium"
          data-theme="outline"
          data-width="100"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left"
        ></div>
      </div> -->
    </div>
    <a-divider
      type="vertical"
      orientation="left"
      style="height: 256px"
      dashed
    />
    <div w="60%" h-74 class="user-form" p="t-5 b-5" text-center>
      <span>Wechat</span>
      <div class="wx-qrcode" w-50 h-50 bd></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-type {
  flex-wrap: wrap;
}
.wx-qrcode {
  margin: 0 auto;
}
</style>
