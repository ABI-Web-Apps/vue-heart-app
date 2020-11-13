<template>
    <v-app>
      <v-main >
        <router-view></router-view>
<!--        <Slider/>-->
      </v-main>
    </v-app>
</template>

<script>
  // import Slider from "@/views/Slider";

  export default {
    name: 'App',
    components: {
      // Slider,
    },
  };
</script>

<style scoped>
</style>