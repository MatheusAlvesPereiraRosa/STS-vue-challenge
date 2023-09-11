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
        <h3 class="text-2xl"><span class="text-green-800">R$:</span> {{ product.price }}</h3>

        <div class="flex items-center">
          <button class="mr-2 bg-green-900 text-white" @click="addToCart(product)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
          <p class="text-xl">{{ product.qty }}</p>
          <button class="ml-2 bg-green-900 text-white" @click="removeFromCart(product)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const addToCart = (product) => {
  console.log(`O produto ${product}`)
  store.dispatch('addToCart', product)
}

const removeFromCart = (product => {
  store.dispatch('removeFromCart', product)
})

const props = defineProps({
  products: Array
})
</script>

<style></style>
