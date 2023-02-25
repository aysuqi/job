<template>
  <div id="examples1">
    <van-cell title="复制示例" label="Clipboard 复制张贴功能">
      <template #value>
        <van-button
          type="primary"
          plain
          size="small"
          @click.prevent.stop="handleClipboard('复制成功', $event)"
          >点击复制</van-button
        >
      </template>
    </van-cell>
  </div>
</template>
<script setup>
import useClipboard from '@/hooks/useClipboard'

const { handleClipboard } = useClipboard()
</script>
<style scoped lang="scss"></style>
