<template>
    <header class="bg-white text-gray-600">
      <div class="container mx-auto flex items-center p-5">
        <RouterLink class="font-bold text-gray-900 bold flex justify-center items-center">Laravel Vue Auth</RouterLink>
      
        <nav class="ml-auto flex justify-center items-center">
          <RouterLink class="mr-5 hover:text-gray-900" to="/">Home</RouterLink>
          <template v-if="authenticated">
            <RouterLink class="mr-5 hover:text-gray-900" to="/dashboard">Dashboard</RouterLink>
            <button @click="logout" class="mr-5 hover:text-gray-900">Logout</button>
          </template>

          <template v-else>
            <RouterLink class="mr-5 hover:text-gray-900" to="/login">Login</RouterLink>
            <RouterLink class="mr-5 hover:text-gray-900" to="/register">Register</RouterLink>
          </template>
          
          
        </nav>
      </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import useAuth from '../auth/useAuth';

const { getAuthenticated: authenticated, logout } = useAuth();

</script>