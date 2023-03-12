<!-- This component handles the rendering of the board square -->

<script setup lang="ts">
defineProps<{
  identifier: string
}>()
</script>

<template>
  <div class="board-square">
    <p>{{ identifier }}</p>
  </div>
</template>

<style lang="scss" scoped>
.board-square {
  border: 1px solid var(--color-border);
}
</style>
