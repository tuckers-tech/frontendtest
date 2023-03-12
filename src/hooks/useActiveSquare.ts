import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useActiveSquare = defineStore('active-square', () => {
  const activeSquare = ref<string | undefined>(undefined)

  function setActiveSquare(newValue: string | undefined) {
    if (activeSquare.value === newValue) {
      activeSquare.value = undefined
    } else {
      activeSquare.value = newValue
    }
  }

  return { activeSquare, setActiveSquare }
})
