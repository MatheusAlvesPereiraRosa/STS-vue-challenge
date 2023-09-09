<script setup>
import { computed } from 'vue'
import store from '../store'

const products = computed(() => store.state.products)
</script>

<template>
  <main>
    <div class="flex my-20 mx-10 justify-center">
      <input
        type="text"
        class="rounded border-2 border-purple-700 w-full"
        placeholder="Procurar pelos produtos"
      />
    </div>

    <div class="mx-10" v-for="product in products" :key="product.id">
      <h1>{{product.name}}</h1>
    </div>
  </main>
</template>
