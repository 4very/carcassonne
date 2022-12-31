<script setup lang="ts">
import BoardTile from './BoardTile.vue'


const props = defineProps(['board'])
const emits = defineEmits(['place'])
</script>

<template>
  <div
    :style="{ 
      'grid-template-columns': `repeat(${props.board.range.size[0] + 1}, 1fr)`, 
      'grid-template-rows': `repeat(${props.board.range.size[1] + 1}, 1fr)` 
    }"
    class="grid w-min m-10"
  >
    <div class="h-16 w-16" />
    <BoardTile
      v-for="key of props.board.keys"
      :key="key"
      :tile="props.board.get(key)"
      :style="{
        'grid-column': `${2 + key[0] - props.board.range.start[0]} / span 1`,
        'grid-row': `${2 + key[1] - props.board.range.start[1]} / span 1`
      }"
      class="aspect-square h-16 w-16"
    />
    <div
      v-for="key of props.board.placeableLocations.keys"
      :key="key"
      :style="{
        'grid-column': `${2 + key[0] - props.board.range.start[0]} / span 1`,
        'grid-row': `${2 + key[1] - props.board.range.start[1]} / span 1`,
        'box-shadow': 'inset 0 0 10px #a5f3fc'
      }"
      class="aspect-square h-16 w-16 text-white"
      @click="emits('place', key)"
    >
      <!-- {{ `(${key[0]},${key[1]})` }} -->
    </div>
  </div>
</template>