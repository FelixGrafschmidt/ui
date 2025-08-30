<template>
  <div class="flex flex-col gap-2">
    <FGButton color="teal" label="Change color" @click="switchColor" />
  </div>
</template>

<script setup lang="ts">
function switchColor() {
  console.warn('Color changed!');
}
</script>
