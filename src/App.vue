<template>
  <div id="app">
  <TheHeader />
  <main class="mt-20">
    <router-view />
  </main>
</div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
</script>