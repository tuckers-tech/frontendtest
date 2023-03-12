import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectHistory = defineStore('active-square', () => {
  const selectHistory = ref<string[]>([])

  function pushSelectHistory(newValue: string) {
    selectHistory.value.push(newValue)
  }

  return { selectHistory, pushSelectHistory }
})
