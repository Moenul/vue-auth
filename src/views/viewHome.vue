<template>
    <div v-if="authenticated" class="text-center">
        <h1 class="text-xl text-gray-800 text-center">Home</h1>
        <p class="text-green-700">User are logged in.</p>
        <p><b>User Name:</b> {{ user.name }}</p>
        <p><b>User Email:</b> {{ user.email }}</p>
    </div>
    <div v-else class="text-center">
        <h1 class="text-xl text-gray-800 text-center">Home</h1>
        <p>Add something...</p>
    </div>
</template>

<script setup>
import useAuth from '../auth/useAuth';

const { getUser: user, getAuthenticated: authenticated } = useAuth();

</script>