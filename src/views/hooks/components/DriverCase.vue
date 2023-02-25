<template>
  <div id="examples3">
    <van-cell title="引导工具" label="Driver.js 引导功能">
      <template #value>
        <van-button
          type="primary"
          plain
          size="small"
          @click.prevent.stop="handleGuide(stepsExamples)"
          >开始引导</van-button
        >
      </template>
    </van-cell>
  </div>
</template>
<script setup>
import useDriver from '@/hooks/useDriver'
import { stepsExamples } from './steps'

const { handleGuide } = useDriver()
</script>
<style scoped lang="scss"></style>
