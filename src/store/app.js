import { defineStore } from 'pinia'

const useAppStore = defineStore('APP', {
  state: () => ({
    checked: false,
    theme: 'dark'
  }),
  getters: {},
  actions: {
    setTheme() {
      this.checked ? this.setThemeDark() : this.setThemeLight()
    },
    setThemeDark() {
      this.$patch(state => {
        state.theme = 'dark'
      })
    },
    setThemeLight() {
      this.$patch(state => {
        state.theme = 'light'
      })
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})

export default useAppStore
