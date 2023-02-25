<template>
  <div>
    <van-cell-group inset>
      <van-cell
        v-for="item in list"
        :key="item.id"
        :title="item.title"
        :label="item.label"
        is-link
        :url="item.url"
      />
    </van-cell-group>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([
  {
    id: 1,
    title: '前端文档库',
    label: 'Vite + Vue3 + Vitepress + TypeScript',
    url: 'https://ysuqi.gitee.io/fish-dev/'
  }
])
</script>
<style scoped lang="scss"></style>
