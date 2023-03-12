<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <main>
    <ChessBoard class="app__chessboard"/>
    <Sidebar class="app__sidebar"/>
  </main>
</template>

<style lang="scss" scoped>
@import "@/styles/utils.scss";

main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;

  @include respond('sm') {
    flex-direction: row;
  }
}

.app__chessboard {
  background-color: var(--color-background);
  flex: 1;
  padding: 12px;
}

.app__sidebar {
  background-color: var(--color-background-soft);
  flex: 1;
  padding: 12px;

  @include respond('sm') {
    max-width: 350px;
  }
}
</style>
