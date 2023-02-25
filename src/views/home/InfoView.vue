<template>
  <div class="info">
    <van-image width="100" height="100" :src="avatar" />
    <h5>WEB前端工程师</h5>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="item in list"
        :key="item.id"
        :icon="item.icon"
        :text="item.text"
        :to="item.path"
      />
    </van-grid>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import avatar from '@/assets/img/logo.png'
const list = ref([
  { id: 1, icon: 'bulb-o', text: '技术栈', path: 'technology' },
  { id: 2, icon: 'tosend', text: '工作经历', path: 'work' },
  { id: 3, icon: 'notes-o', text: '项目经历', path: 'project' },
  { id: 4, icon: 'calendar-o', text: '日历', path: 'calendar' },
  { id: 5, icon: 'flag-o', text: '个人项目', path: 'private' },
  { id: 6, icon: 'brush-o', text: 'hooks', path: 'hooks' }
])
</script>
<style scoped lang="scss">
.info {
  padding: 40px 0;
  text-align: center;
}
</style>
