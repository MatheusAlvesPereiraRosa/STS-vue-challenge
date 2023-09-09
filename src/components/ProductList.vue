<template>
  <div class="mx-20 mb-10 grid grid-cols-4 gap-12">
    <div v-for="product in products" :key="product.id">
      <img class="aspect-square object-cover" :src="product.imageUrl">

      <p class="mt-5 text-2xl">{{ product.name }}</p>

      <h3 class="mt-2 text-2xl"><span class="text-green-800">R$:</span> {{product.price }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  products: Array,
});

</script>

<style></style>
