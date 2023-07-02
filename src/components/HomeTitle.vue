<script setup lang="ts">
    import * as packageJson from '../../package.json'
    const version = packageJson.version
    const name = "Preston Neal"
    const title = "Software Engineer"
    const visitCount = 956
</script>

<template>
  <div class="h-max bg-[#222222] text-[#E8E6E3] flex flex-col items-center content-center m-auto text-center">
    <img src='/hedgehog-noborder.svg' height=300 width=200>
    <h1 id="name" class="text-6xl p-3">{{ name }}</h1>
    <h2 id="title" class="text-4xl p-3">{{ title }}</h2>
    <p class="text-sm text-gray-400"> Version <span id="version">{{ version }}</span> </p>
    <p class="font-mono text-sm text-gray-400"> Site Visits: <span id="site-visits">{{ visitCount ?? '' }}</span>
    </p>
  </div>
</template>
