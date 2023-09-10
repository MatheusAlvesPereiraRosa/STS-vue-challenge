<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ProductList from '../components/ProductList.vue'

const store = useStore()

const products = computed(() => {
  console.log(products)
  return store.state.products
})
</script>

<template>
  <main class="">
    <div class="flex py-20 px-20 justify-center lg:max-md:flex-row sm:flex-col max-[640px]:flex-col">
      <input
        type="text"
        class="rounded border-2 border-purple-700 w-full text-2xl text-orange-500 placeholder:text-orange-300 active:border-purple-700 max-[640px]:mb-5"
        placeholder="Procurar pelos produtos"
      />

      <div class="flex sm:justify-between sm:mt-5 max-[640px]:flex-col">
        <div class="lg:max-xl:ml-4 lg:max-xl:px-5 max-[640px]:mb-5">
          <h1 class="text-2xl">Pesquisar por preço</h1>
          <input class="w-full mt-2" type="range" id="vol" name="vol" min="0" max="50" />
        </div>

        <select
          class="rounded border-2 border-purple-700 text-xl text-orange-500 placeholder:text-orange-300 active:border-purple-700"
        >
          <option value="">Selecione um gênero</option>
          <option>Tipos de roupas</option>
        </select>
      </div>
    </div>

    <ProductList :products="products" />
  </main>
</template>
