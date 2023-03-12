<!-- This component handles the rendering of the board square -->

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  identifier: string
}>()

const emit = defineEmits<{
  (e: 'selected', value: string): void
}>()

const isLightSquare = computed(() => {
  const oddLightSquares = ['b', 'd', 'f', 'h']
  const evenLightSquares = ['a', 'c', 'e', 'g']

  const col = props.identifier[0]
  const row = parseInt(props.identifier[1], 10)

  if (row % 2 !== 0) {
    // Odd row
    return oddLightSquares.includes(col)
  } else {
    // Odd row
    return evenLightSquares.includes(col)
  }
})

const onSquareSelect = () => {
  emit('selected', props.identifier)
}
</script>

<template>
  <button
    class="board-square"
    :class="[isLightSquare ? 'bord-square--light' : 'board-square--dark']"
    @click="onSquareSelect"
  >
    <span class="board-square__identifier">{{ identifier }}</span>
  </button>
</template>

<style lang="scss" scoped>
.board-square {
  position: relative;

  border: 1px solid transparent;
  cursor: pointer;

  &--light {
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
  }

  &--dark {
    background-color: var(--color-border);
  }

  &__identifier {
    position: absolute;
    top: 4px;
    left: 4px;
    color: var(--color-text);
  }
}
</style>
