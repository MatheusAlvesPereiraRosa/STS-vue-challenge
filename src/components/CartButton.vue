<template>
  <button
    class="bg-orange-600 p-2 rounded ease-in-out delay-50 duration-125"
    :class="{ 'transition hover:-translate-y-1 hover:scale-125': isBouncing }"
    @click="handleButtonClick(product)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="purple"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  </button>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'

const store = useStore()

const isBouncing = ref(false)

// Função para lidar com o click, fazer a animação e adicionar no carrinho
const handleButtonClick = (product) => {
  store.dispatch('addToCart', product)

  isBouncing.value = true
  setTimeout(() => {
    isBouncing.value = false
  }, 250)
}

const props = defineProps({
  product: {
    id: Number,
    name: String,
    imageSrc: String,
    price: Number
  }
})
</script>
