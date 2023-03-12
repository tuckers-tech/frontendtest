<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <header>
    <h2>Chess.com Test</h2>
  </header>

  <main>
    <ChessBoard class="app__chessboard" />
    <Sidebar class="app__sidebar" />
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/utils.scss';

header {
  padding: 24px 24px 0 24px;
}

main {
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
  flex: 1;

  @include respond('sm') {
    flex-direction: row;
  }
}

.app__chessboard {
  background-color: var(--color-background);
  flex: 1;
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
