
<template>
    <header class="flex shadow" v-if="$route.meta.title">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }} / {{ store.count }}
        </h1>
        <Menu/>
      </div>
    </header>
</template>

<script setup>
    import { useStore } from '@/store/store.js'

    import { ref } from 'vue'
    import Menu from '@/components/Navigation/Menu.vue'

    const store = useStore()

    store.increment()

</script>