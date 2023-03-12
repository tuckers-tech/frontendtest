<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useActiveSquare, useSelectHistory } from '@/hooks'

const { activeSquare } = storeToRefs(useActiveSquare())
const { selectHistory } = storeToRefs(useSelectHistory())
</script>

<template>
  <div class="sidebar">
    <h3>Active Square: {{ activeSquare ?? 'None' }}</h3>

    <hr class="sidebar__rule" />

    <h3>Selected Squares</h3>
    <div class="sidebar__scroll">
      <p v-for="entry of selectHistory">{{ entry }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  height: 100%;
  overflow: hidden;

  &__rule {
    border-color: var(--color-border);
  }

  &__scroll {
    // TODO(Tucker) - I'm not a fan of thi.  It's a magic number
    //  and causes a weird mobile rendering bug.  I figure
    //  y'all are probably interested in a balance between
    //  data management and styling.
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }
}
</style>
