<template>
  <div>
    <van-row gutter="20" class="head-box">
      <van-col span="12">
        <div class="cur-box">
          <van-icon name="arrow-left" @click="changeYear('prev')" />
          <span class="title">{{ state.curYear }} 年</span>
          <van-icon name="arrow" @click="changeYear('next')" />
        </div>
      </van-col>
      <van-col span="12">
        <div class="cur-box">
          <van-icon name="arrow-left" @click="changeMonth('prev')" />
          <span class="title"
            >{{ state.curMonth + 1 }} 月 - {{ state.curDate }} 日</span
          >
          <van-icon name="arrow" @click="changeMonth('next')" />
        </div>
      </van-col>
    </van-row>
    <div :class="['calendar-box', theme1]">
      <ul>
        <li>日</li>
        <li>一</li>
        <li>二</li>
        <li>三</li>
        <li>四</li>
        <li>五</li>
        <li>六</li>
      </ul>
      <div :class="['list', theme2]">
        <template v-for="item in state.dataCount" :key="item">
          <div class="block">
            <div @click="activeDate(item)">
              <span :class="isCurrentDate(item)">{{ filterDate(item) }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed } from 'vue'
import useAppStore from '@/store/app'

const store = useAppStore()
const theme1 = computed(() => (store.checked ? 'dark-bg' : 'ligth-inverse'))
const theme2 = computed(() => (store.checked ? 'dark-grey' : 'ligth-seconday'))
const state = reactive({
  dataCount: [],
  curYear: null,
  curMonth: null,
  curDate: null,
  active: null
})

let curYEAR = new Date().getFullYear()
let curMONTH = new Date().getMonth()

onMounted(() => {
  let date = new Date()
  state.curYear = date.getFullYear()
  state.curMonth = date.getMonth()
  state.curDate = date.getDate()
  getDateCount()
})
// 获取总天数
const getDateCount = () => {
  let count = new Date(state.curYear, state.curMonth + 1, 0).getDate()
  // 获取1号对应的星期
  let firstWeekDay = new Date(state.curYear, state.curMonth, 1).getDay()
  for (let i = 1; i <= count + firstWeekDay; i++) {
    let val = i - firstWeekDay
    state.dataCount.push(val)
  }
}
// 过滤时间
const filterDate = date => (date > 0 ? date : '')
// 激活样式
const isCurrentDate = date => {
  if (
    date == state.curDate &&
    state.curMonth == curMONTH &&
    state.curYear == curYEAR &&
    date != state.active
  ) {
    return 'active'
  } else {
    if (date == state.active) {
      return 'active-bg'
    } else {
      return ''
    }
  }
}
// 切换年份
const changeYear = type => {
  state.dataCount = []
  state.active = null
  type === 'prev' ? state.curYear-- : state.curYear++
  getDateCount()
}
// 切换月份
const changeMonth = type => {
  state.dataCount = []
  state.active = null
  if (type === 'prev') {
    state.curMonth--
    if (state.curMonth < 0) {
      state.curMonth = 11
      state.curYear--
    }
  } else {
    state.curMonth++
    if (state.curMonth > 11) {
      state.curMonth = 0
      state.curYear++
    }
  }
  getDateCount()
}
// 激活日期
const activeDate = date => {
  state.active = date
}
</script>
<style scoped lang="scss">
.head-box {
  padding: 60px 0;
  // background-color: #fff;
}
.cur-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .title {
    font-weight: bold;
  }
}
.dark-grey {
  background-color: $y-dark-grey;
}
.dark-bg {
  background-color: $y-dark-bg;
}
.ligth-inverse {
  background-color: $y-text-inverse;
}
.ligth-seconday {
  background-color: $y-text-seconday;
}
.calendar-box {
  // background-color: #fff;
  ul {
    display: flex;
  }
  ul li {
    flex: 1;
    text-align: center;
  }
  .list {
    // background-color: #f5f5f5;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
    margin-top: 40px;
    .block {
      width: 14.285%;
      text-align: center;
      padding: 40px 0;
      cursor: pointer;
      .active {
        background-color: brown;
        color: aliceblue;
        padding: 12px 12px;
        border-radius: 24px;
      }
      .active-bg {
        background-color: #1890ff;
        color: aliceblue;
        padding: 12px 12px;
        border-radius: 24px;
      }
    }
  }
}
</style>
