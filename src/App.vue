<template>
  <div class="bg-gray-200 min-h-screen">
    <NavBar></NavBar>

    <section class="bg-white max-w-xl w-full mx-auto mt-20 border rounded-lg p-5 shadow">
      <RouterView></RouterView>
    </section>
  </div>
 
</template>
<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>