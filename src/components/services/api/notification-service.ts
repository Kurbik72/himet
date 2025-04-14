import { useToast, TYPE, POSITION } from 'vue-toastification'

const toast = useToast()
export const NotificationService = {
  success: (message: string) => {
    toast(message, {
      type: TYPE.SUCCESS,
      position: POSITION.BOTTOM_RIGHT,
      timeout: 1500,
    })
  },
  delete: (message: string) => {
    toast(message, {
      type: TYPE.ERROR,
      position: POSITION.BOTTOM_RIGHT,
      timeout: 1500,
    })
  },
  warning: (message: string) => {
    toast(message, {
      type: TYPE.WARNING,
      position: POSITION.BOTTOM_RIGHT,
      timeout: 1500,
    })
  },
}
