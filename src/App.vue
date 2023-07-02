<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<!--  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="min-h-screen flex flex-col bg-[#222222] h-max">
      <RouterView />
  </div>
</template>
