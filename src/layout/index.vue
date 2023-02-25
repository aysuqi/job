<template>
  <van-config-provider :theme="store.theme" :class="['main', mainClass]">
    <van-sticky>
      <van-cell center title="切换深色模式">
        <template #right-icon>
          <van-switch v-model="store.checked" @change="store.setTheme" />
        </template>
      </van-cell>
    </van-sticky>
    <router-view />
  </van-config-provider>
</template>
<script setup>
import { computed } from 'vue'
import useAppStore from '@/store/app'

const store = useAppStore()
const mainClass = computed(() => {
  return store.theme === 'light' ? 'light' : 'dark'
})
</script>
<style lang="scss">
.main {
  min-height: 100vh;
}
.dark {
  background-color: #1c1c1e;
  color: #f5f5f5;
}
.light {
  background-color: #fff;
  color: #1c1c1e;
}
</style>
