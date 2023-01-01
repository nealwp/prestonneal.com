<script>
export default {
  components: {},
  props: {},
  computed: {
      copyrightYear() {
          return new Date().getFullYear()
      }   
  }
}
</script>

<template>
  <div class="flex w-full justify-center bg-primary">
      <div class="flex align-items-center justify-content-between">
        <div class="container text-xl font-thin m-auto">
         This is the Footer Section
         <div>Copyright © {{copyrightYear}} PrestonNeal.com. All rights reserved.</div>
        </div>
      </div>
    </div>
</template>