<template>
  <div class="bg-gray-200 min-h-screen">
    <header class="bg-white text-gray-600">
      <div class="container mx-auto flex items-center p-5">
        <RouterLink class="font-bold text-gray-900 bold flex justify-center items-center">Laravel Vue Auth</RouterLink>
      
        <nav class="ml-auto flex justify-center items-center">
          <RouterLink class="mr-5 hover:text-gray-900" to="/">Home</RouterLink>
          <RouterLink class="mr-5 hover:text-gray-900" to="/dashboard">Dashboard</RouterLink>
          <RouterLink class="mr-5 hover:text-gray-900" to="/login">Login</RouterLink>
          <RouterLink class="mr-5 hover:text-gray-900" to="/register">Register</RouterLink>
        </nav>
      </div>
    </header>

    <section class="bg-white max-w-xl w-full mx-auto mt-20 border rounded-lg p-5 shadow">
      <RouterView></RouterView>
    </section>
  </div>
 
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>