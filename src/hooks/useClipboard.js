import Clipboard from 'clipboard'
import { showNotify } from 'vant'

export default function useClipboard() {
  const clipboardSuccess = text => {
    showNotify({
      message: text,
      type: 'success',
      duration: 1500
    })
  }

  const clipboardError = () => {
    showNotify({
      message: '复制失败！',
      type: 'danger',
      duration: 1500
    })
  }

  const handleClipboard = (text, event) => {
    const clipboard = new Clipboard(event.target, {
      text: () => text
    })

    clipboard.on('success', () => {
      clipboardSuccess(text)
      clipboard.off('danger')
      clipboard.off('success')
      clipboard.destroy()
    })

    clipboard.on('danger', () => {
      clipboardError()
      clipboard.off('danger')
      clipboard.off('success')
      clipboard.destroy()
    })

    clipboard.onClick(event)
  }

  return {
    handleClipboard
  }
}
