<template>
  <div>
    <div>
      <div class="py-20 px-6 text-center">
        <h1 class="mb-12 text-5xl">Homepage Dashboard</h1>
        <!-- <nuxt-link to="/browse" class="inline-block py-4 px-8 bg-gray-400 hover:bg-gray-500 text-white rounded-xl">Browse</nuxt-link> -->
      </div>
      <!-- <div class="py-10 px-6">
        <h2 class="mb-8 text-2xl text-center">Customers</h2> -->

        <!-- <div class="space-y-4">
          <Customer />
        </div> -->
        
      <!-- </div>   -->
    
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/users";

const userStore = useUserStore();

definePageMeta({
  layout: "default-layout",
});
</script>