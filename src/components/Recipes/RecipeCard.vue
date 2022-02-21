<template>
    <div class="border-2 rounded-lg recipe-card">
        <router-link :to="{ name: 'recipe', params: { id: recipe.id } }" class="img-link focus:shadow-none">
            <img class="aspect-square recipe-card-img" :src="recipe.image" crossorigin="anonymous" :alt="recipe.title">
        </router-link>
        <div class="p-8">
            <h3 class="text-2xl font-bold tracking-wide text-blue-500 hover:text-blue-600">
                <router-link :to="{ name: 'recipe', params: { id: recipe.id} }" tabindex="-1">
                    {{ recipe.title }}
                </router-link>
            </h3>
            <p class="mt-4 text-blue-600">{{ recipe.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    recipe: {
        type: Object
    }
})
</script>