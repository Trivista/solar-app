<template>
 <footer class="p-2 flex flex-wrap items-center justify-between bg-gray-400">
  <div >
    <span v-if="config.siteEnvironment">{{ config.siteEnvironment }}</span>
  </div>
  <div>
    &copy;{{ appStore.copyrightText }} - All Rights Reserved
  </div>
  <div>
    Tel:
    <a :href="'tel:' + config.telephone">{{ config.telephone }}</a> 
  </div>
  
 </footer>
    

</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app";
const appStore = useAppStore();
const { public: config } = useRuntimeConfig();
// onMounted(() => {
//   appStore.updateCookieConsent(true);
// });
</script>

<style scoped>
</style>
