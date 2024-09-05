<template>
  <h1 class="text-2xl text-gray-800 text-center">Login</h1>
  <form @submit.prevent="login(form)">
    <div class="text-sm text-red-700 text-center" v-if="errors.message">
        {{ errors.message }}!!
    </div>
    <div class="mb-3">
      <label for="email" class="text-sm text-gray-600">Email</label>
      <input v-model="form.email" type="email" name="email" class="w-full bg-white text-base outline-none text-gray-500 py-1 px-3 leading-8 border-2 rounded-md border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-colors duration-200 ease-in-out">
      <div class="text-xs text-red-700 pl-1" v-if="errors.email">
        {{ errors.email[0] }}
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="text-sm text-gray-600">Password</label>
      <input v-model="form.password" type="password" name="password" class="w-full bg-white text-base outline-none text-gray-500 py-1 px-3 leading-8 border-2 rounded-md border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-colors duration-200 ease-in-out">
      <div class="text-xs text-red-700 pl-1" v-if="errors.password">
        {{ errors.password[0] }}
      </div>
    </div>
    <div class="mb-3">
      <button type="submit" class="text-white bg-gray-600 py-2 px-6 border-none rounded-md w-full text-center text-lg focus:outline-none hover:bg-gray-700">Login</button>
    </div>
  </form>
    
</template>
<script setup>
import { ref } from 'vue';
import useAuth from '../../auth/useAuth';

const {login, getAuthenticated: auth, getUser: user, errors} = useAuth();

const form = ref({
  email : '',
  password : ''
})


</script>