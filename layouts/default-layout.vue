<template>
  <div id="app">
    <div class="flex mt-4 md:mt-0 items-center space-x-4 bg-gray-400">
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


//if user is authenticated, show drawer
if (userStore.user.isAuthenticated) {
    showDrawer.value = true;
}

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
