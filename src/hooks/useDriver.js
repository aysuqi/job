import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { ref, onMounted } from 'vue'

export default function useDriver() {
  onMounted(() => {
    initDriver()
  })
  const driver = ref(null)
  const initDriver = () => {
    driver.value = new Driver({
      animate: true, // 是否开启动画
      opacity: 0.75, // 蒙层背景透明度
      padding: 10, // 元素与边缘周围的距离
      allowClose: true, // 点击蒙层是否应该关闭
      overlayClickNext: true, // 点击蒙层是否应该移动下一步
      doneBtnText: '完成', // 最后一个按钮上的文本
      closeBtnText: '关闭', // 此步骤的关闭按钮上的文本
      stageBackground: '#ffffff', // 高亮显示元素的背景颜色
      nextBtnText: '下一步', // 此步骤的下一步按钮文本
      prevBtnText: '上一步' // 此步骤的上一个按钮文本
    })
  }

  const handleGuide = fn => {
    driver.value.defineSteps(fn())
    driver.value.start()
  }

  return {
    initDriver,
    handleGuide
  }
}
