<template>
    <div class="ts" mt-20px p5px color="#fff">
        <div class="ts-ts" p5px>
            <h1>away</h1>
            <NuxtLink mr-20px to="/demo/tss2">进入列表页2</NuxtLink>
            <NuxtLink to="/demo/tsss">进入列表页s</NuxtLink>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
const foo = useFoo()
const user = useUserStore().userInfo
const appConfig = useAppConfig()
onMounted(() => {
    console.log('===', user);
})
</script>
<style lang="scss" scoped>
.ts{
    background: $bgColor;
    .ts-ts {
        border: 1px solid #fff;
        color: #fff;
    }
}
</style>