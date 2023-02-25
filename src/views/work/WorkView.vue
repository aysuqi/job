<template>
  <div>
    <van-steps direction="vertical" :active="0">
      <van-step v-for="item in list" :key="item.id">
        <h3>{{ item.title }}</h3>
        <ul>
          <li>{{ item.position }}</li>
          <li>{{ item.date }}</li>
        </ul>
      </van-step>
    </van-steps>
  </div>
</template>
<script setup>
import { list } from './data'
</script>
<style scoped lang="scss"></style>
