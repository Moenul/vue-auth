<template>
    <form @submit.prevent="login">
      <button type="submit">Submit</button>
    </form>
</template>
<script setup>
import axios from 'axios';

const login = async () => {
await axios.get('sanctum/csrf-cookie');
await axios.post('/login',{
    email:'moenul22@gmail.com',
    password:'password'
});
}
</script>