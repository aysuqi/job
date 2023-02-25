<template>
  <div id="examples2">
    <van-field
      v-model="sms"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
    >
      <template #button>
        <van-button
          plain
          size="small"
          type="primary"
          :disabled="disabled"
          @click="getVerificationCode"
          >{{
            codeText === '发送验证码' ? codeText : `${count}${codeText}`
          }}</van-button
        >
      </template>
    </van-field>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import useCountDow from '@/hooks/useCountDow'

const { codeText, count, disabled, getCode } = useCountDow()
const sms = ref('')
const tel = ref('18759185239')
// 模拟请求获取code
const getVerificationCode = () => {
  // 这里执行逻辑...
  getCode(() => ({}))({ tel: tel.value })
}
</script>
<style scoped lang="scss"></style>
