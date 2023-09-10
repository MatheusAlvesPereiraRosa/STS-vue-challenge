<template>
  <header>
    <nav class="bg-orange-500 flex justify-between items-center">
      <RouterLink to="/" class="p-5 text-2xl text-purple-950 hover:text-white">Home</RouterLink>
      <ul class="flex items-center">
        <li
          class="p-5 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:cursor-pointer duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="purple"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
