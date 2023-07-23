<template>
  <div>
    <div >
      <!-- <div class="flex mt-4 md:mt-0 items-center space-x-4"> -->
        <!-- <button v-if="userStore.user.isAuthenticated" @click="isDrawerOpen = true" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isDrawerOpen" fill-rule="evenodd" clip-rule="evenodd" d="M19 6H5V5h14v1zm0 5H5v1h14v-1zm0 5H5v1h14v-1z"/>
            <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v1H4V6zm0 5h16v1H4v-1zm0 5h16v1H4v-1z"/>
          </svg>
        </button> -->
        <nuxt-link to="/">
          <img src="../assets/Premium Solar Energy Logo Transparent Tight.png" alt="" />
        </nuxt-link>
      <!-- </div> -->
    </div>
    <div >
      <NuxtLink to="/">
        <p>{{ config.siteName }}</p>
      </NuxtLink>
    </div>
    <div>
      <!-- <p title="telephone">
        Tel: <a :href="'tel:' + config.telephone">{{ config.telephone }}</a>
      </p> -->
      <Drawer /> 
    </div>
    <div class="flex mt-4 md:mt-0 items-center space-x-4">
      <template v-if="userStore.user.isAuthenticated">
        <nuxt-link v-if="userStore.user.role === 'customer'" to="/browse/1" class="py-4 px-6 bg-gray-700 hover:bg-gray-500 text-white rounded-xl">My installation</nuxt-link>
        <div v-else class="py-4 px-8 bg-gray-400 rounded-xl"/>
        <nuxt-link to="/logout-page" class="py-4 px-6 bg-rose-500 hover:bg-rose-400 text-white rounded-xl">Log out</nuxt-link>
      </template>
      <template v-else>
        <nuxt-link to="/login-page" class="py-4 px-6 bg-gray-700 hover:bg-gray-500 text-white rounded-xl">Login</nuxt-link>
        <nuxt-link to="/signup-page" class="py-4 px-6 bg-gray-600 hover:bg-gray-500 text-white rounded-xl">Sign up</nuxt-link>
      </template> 
    </div> 
  </div>
 
</template>

<script setup lang="ts">


  import { useUserStore } from "@/stores/users";
  
  const { public: config } = useRuntimeConfig();
  const userStore = useUserStore();
  const showDrawer = ref(false);
  const isDrawerOpen = ref(false);
</script>