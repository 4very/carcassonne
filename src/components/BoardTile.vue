<script setup lang="ts">

const props = defineProps(['tile'])

</script>

<template>
  <div>
    <img
      :src="`assets/tiles/${props.tile.edges.join('')}.png`"
      class=""
      :style="{'transform': `rotate(${props.tile.rotation * 90}deg)`}"
    >
  </div>
</template>