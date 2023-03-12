<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useActiveSquare, useSelectHistory } from '@/hooks'
import BoardSquare from '@/components/BoardSquare.vue'

const { activeSquare } = storeToRefs(useActiveSquare())
const { setActiveSquare } = useActiveSquare()

const { pushSelectHistory } = useSelectHistory()

const identifiers = computed(() => {
  const rows = Array.from({ length: 8 }, (_, i) => i + 1).reverse()
  const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  const identifiers = []

  for (const row of rows) {
    for (const col of columns) {
      identifiers.push(`${col}${row}`)
    }
  }

  return identifiers
})

const onSquareSelect = (identifier: string) => {
  setActiveSquare(identifier)
  pushSelectHistory(identifier)
}

const isActive = (identifier: string) => activeSquare.value === identifier
</script>

<template>
  <div class="chess-board__container">
    <div class="chess-board__board">
      <BoardSquare
        v-for="identifier of identifiers"
        :key="identifier"
        :identifier="identifier"
        :active="isActive(identifier)"
        @selected="onSquareSelect"
      ></BoardSquare>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chess-board {
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &__board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);

    aspect-ratio: 1 / 1;
    width: 100%;

    max-width: 900px;
  }
}
</style>
