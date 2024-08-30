<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>