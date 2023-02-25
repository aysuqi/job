<template>
  <div>
    <section v-for="item in list" :key="item.id" class="progress">
      <h3>{{ item.title }}</h3>
      <van-progress
        :pivot-text="item.text"
        :color="item.color"
        :percentage="item.percentage"
        stroke-width="8"
      />
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([
  { id: 1, text: '90%', color: '#1890ff', percentage: '90', title: 'Vue' },
  { id: 2, text: '60%', color: '#faad14', percentage: '60', title: 'Vite' },
  {
    id: 3,
    text: '60%',
    color: '#faad14',
    percentage: '60',
    title: 'Vitepress'
  },
  {
    id: 4,
    text: '85%',
    color: '#52c41a',
    percentage: '85',
    title: '微信小程序'
  },
  { id: 5, text: '70%', color: '#faad14', percentage: '70', title: 'uni-app' },
  { id: 6, text: '45%', color: '#ff4d4f', percentage: '45', title: 'Angular' },
  { id: 7, text: '30%', color: '#ff4d4f', percentage: '30', title: 'React' }
])
</script>
<style scoped lang="scss">
.progress {
  padding: 20px 40px;
}
</style>
