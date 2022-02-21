<template>
  <div class="bg-gray-50">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Ready to dive in?
        <br />
        <span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span>
      </h2>
      <div class="flex mt-8 lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/about"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
            >Next Page</router-link
          >
        </div>
        <ButtonRepo />
      </div>
    </div>
    <transition-group name="list" tag="div" class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <RecipeCard v-for="recipe in store.Recipes" :recipe="recipe" :key="recipe.id" />
    </transition-group>

  </div>
</template>

<script setup>
  import { useStore } from '@/store/store.js'
  import ButtonRepo from '@/components/ButtonRepo.vue'
  import RecipeCard from '@/components/Recipes/RecipeCard.vue'

  const store = useStore()
</script>
