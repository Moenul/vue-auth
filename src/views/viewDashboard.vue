<template>
    <div class="text-center">
        <h1 class="text-xl text-gray-800 text-center">{{ user.name }}</h1>
        <p>{{ user.email }}</p>
    </div>
</template>

<script setup>
import useAuth from '../auth/useAuth';

const { getUser: user } = useAuth();

</script>