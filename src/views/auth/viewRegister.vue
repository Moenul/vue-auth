<template>
    <h1 class="text-2xl text-gray-800 text-center">Register</h1>
    
    <form @submit.prevent="register(form)">
        <div class="mb-3">
            <label for="name" class="text-sm text-gray-600">Name</label>
            <input v-model="form.name" type="text" name="name" class="w-full bg-white text-base outline-none text-gray-500 py-1 px-3 leading-8 border-2 rounded-md border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <label for="email" class="text-sm text-gray-600">Email</label>
            <input v-model="form.email" type="email" name="email" class="w-full bg-white text-base outline-none text-gray-500 py-1 px-3 leading-8 border-2 rounded-md border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <label for="password" class="text-sm text-gray-600">Password</label>
            <input v-model="form.password" type="password" name="password" class="w-full bg-white text-base outline-none text-gray-500 py-1 px-3 leading-8 border-2 rounded-md border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <label for="password_confirmation" class="text-sm text-gray-600">Password Confirmaton</label>
            <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="w-full bg-white text-base outline-none text-gray-500 py-1 px-3 leading-8 border-2 rounded-md border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition-colors duration-200 ease-in-out">
        </div>
        <div class="mb-3">
            <button type="submit" class="text-white bg-gray-600 py-2 px-6 border-none rounded-md w-full text-center text-lg focus:outline-none hover:bg-gray-700">Register</button>
        </div>
    </form>
      
</template>

<script setup>
import { ref } from 'vue';
import useAuth from '../../auth/useAuth';

const { register } = useAuth();
 
const form = ref({
    name: 'Bijoy',
    email: 'bijoy@gmail.com',
    password: 'password',
    password_confirmation: 'password',
})


</script>