<template>
  <div class="mx-20 mb-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12">
    <div
      class="hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer duration-300"
      v-for="product in products"
      :key="product.id"
    >
      <img class="aspect-square object-cover hover:animate-pulse" :src="product.imageUrl" />

      <p class="mt-5 text-2xl">{{ product.name }}</p>
      <p>Categoria: {{ product.type }}</p>

      <div class="flex justify-between items-center mt-2">
        <CartButton :product="product" />
        <h3 class="text-2xl"><span class="text-green-800">R$:</span> {{ product.price }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartButton from '../components/CartButton.vue'

const props = defineProps({
  products: Array
})
</script>

<style></style>
