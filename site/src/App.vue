<template>
  <div class="flex max-h-screen max-w-screen bg-primary text-secondary font-sans" id="app">
    <router-view />
  </div>
</template>

<script>

import appConfig from "@/app.config";

export default {
  name: 'App',
  page: {
    titleTemplate(title) {
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    }
  },
  components: {}
}
</script>
