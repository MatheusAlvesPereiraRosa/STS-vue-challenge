<template>
  <div class="flex py-20 px-20 justify-center">
    <input
      type="text"
      class="rounded border-2 border-purple-700 w-full text-2xl text-orange-500 placeholder:text-orange-300 active:border-purple-700"
      placeholder="Procurar pelos produtos"
      @change="searchProducts"
    />
  </div>
</template>

<script setup>
  import {ref} from 'vue'

  const keyword = ref('')
  
  function searchProducts() {

  }
</script>

<style></style>
