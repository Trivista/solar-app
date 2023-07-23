<template>
  <div id="app">
    <div class="flex mt-4 md:mt-0 items-center space-x-4 bg-gray-400">
      <button v-if="userStore.user.isAuthenticated && userStore.user.role !== 'customer'" @click="isDrawerOpen = true" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <title>Menu</title>
          <path v-if="isDrawerOpen" fill-rule="evenodd" clip-rule="evenodd" d="M19 6H5V5h14v1zm0 5H5v1h14v-1zm0 5H5v1h14v-1z"/>
          <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4v-1z"/>
        </svg>
      </button>
      <TheHeader class="grid md:grid-cols-4 gap-3 py-10 px-6 bg-gray-400 items-right" />
    </div> 
    <div>
  
      <slot /> 
    </div>
    <TheFooter /> 
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app";
import { useUserStore } from "@/stores/users";

const appStore = useAppStore();
const userStore = useUserStore();
const showDrawer = ref(false);
const isDrawerOpen = ref(false);

// onMounted(() => {
//   appStore.updateCookieConsent(true);
// });
</script>

<style>
/* Hide drawer by default */
.fixed {
  transform: translateX(-100%);
}

/* Show drawer when drawer-open class is added to the body */
.drawer-open .fixed {
  transform: none;
}
</style>
