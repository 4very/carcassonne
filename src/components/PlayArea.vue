<script lang="ts" setup>
import { ref } from 'vue'
import Board from './Board.vue'
import { boardClass, coord } from '@/rules/board'
import Deck from './Deck.vue'
import { tile } from '@/rules/tile'

const board = ref(new boardClass())


const defaultTile = {rotation: 0, edges: ['R', 'G', 'R', 'G'], terminatesRoads: false}
const onDeck = ref(defaultTile as tile)


const tileOptions = [
  {rotation: 0, edges: ['R', 'G', 'R', 'G'], terminatesRoads: false},
  {rotation: 0, edges: ['R', 'R', 'G', 'G'], terminatesRoads: false},
] as tile[]



const place = (coords: coord) => {
  board.value.place(coords, onDeck.value)
  onDeck.value = {...tileOptions[Math.floor(Math.random() * tileOptions.length)]}
}

// place down first tile
place([0,0])

const rotate = (clockwise: boolean) => {
  onDeck.value.rotation += clockwise ? 1 : -1
}

</script>

<template>
  <div>
    <Board
      :board="board"
      @place="place"
    />
    <Deck
      :tile="onDeck"
      @rotate="rotate"
    />
  </div>
</template>

