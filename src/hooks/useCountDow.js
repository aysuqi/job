import { ref } from 'vue'
import { showNotify } from 'vant'
import { mobile } from '@/utils/test'

export default function useCountDow() {
  const timer = ref(null)
  const codeText = ref('发送验证码')
  const count = ref(60)
  const disabled = ref(false)

  const getCode = (fn, counts) => async params => {
    if (!params.tel)
      return showNotify({ type: 'warning', message: '请输入手机号码' })
    let isMobile = mobile(params.tel)
    if (!isMobile)
      return showNotify({ type: 'warning', message: '手机格式有误' })
    const res = await fn(params)
    showNotify({ type: 'success', message: res.data?.code || '开始倒计时' })
    countDown(counts)
  }

  /**
   * 60 秒倒计时
   * @param {*} counts
   */
  const countDown = counts => {
    codeText.value = 's 后重新获取'
    disabled.value = true
    count.value = counts ? counts : 60
    if (!timer.value) {
      timer.value = setInterval(() => {
        if (count.value > 0) {
          count.value--
        } else {
          clearInterval(timer.value)
          timer.value = null
          count.value = 60
          codeText.value = '发送验证码'
          disabled.value = false
        }
      }, 1000)
    }
  }

  return {
    codeText,
    count,
    disabled,
    countDown,
    getCode
  }
}
