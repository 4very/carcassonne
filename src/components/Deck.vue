<script setup lang="ts">
import BoardTile from './BoardTile.vue'

const emits = defineEmits(['rotate'])
const props = defineProps(['tile'])
</script>

<template>
  <div>
    <BoardTile
      draggable
      class="w-32 h-32"
      :tile="props.tile"
    />
    <button
      class="bg-rose-400 px-4 rounded-full my-2 mr-2"
      @click="emits('rotate', false)"
    >
      Left
    </button>
    <button
      class="bg-rose-400 px-4 rounded-full my-2 mr-2"
      @click="emits('rotate', true)"
    >
      Right
    </button>
  </div>
</template>