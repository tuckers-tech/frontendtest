<script setup lang="ts">
import BoardSquare from '@/components/BoardSquare.vue'

const rows = Array.from({ length: 8 }, (_, i) => i + 1).reverse()
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const onSquareSelect = (identifier: string) => {
  console.log(identifier)
}
</script>

<template>
  <div class="chess-board__container">
    <div class="chess-board__board">
      <template v-for="row of rows">
        <BoardSquare
          v-for="col of columns"
          :key="`${col}${row}`"
          :identifier="`${col}${row}`"
          @selected="onSquareSelect"
        ></BoardSquare>
      </template>
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
