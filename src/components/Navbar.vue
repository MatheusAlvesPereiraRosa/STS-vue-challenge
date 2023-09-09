<template>
  <header>
    <nav class="bg-orange-500 flex justify-between">
      <RouterLink to="/" class="p-5 text-2xl text-purple-950 hover:text-white">Home</RouterLink>
      <ul class="flex items-center">
        <li class="p-5">Carrinho</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
