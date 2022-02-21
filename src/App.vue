<template>
  <div>
    <Header/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
  import Header from '@/components/Layout/Header.vue'
</script>
