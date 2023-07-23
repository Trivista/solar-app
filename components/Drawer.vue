<template>
    <div class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">

           
      <nav class="text-xl text-white">
        <template v-if="userStore.user.role === 'admin'">
          <nuxt-link to="/admin" class="hover:text-gray-200">Admin</nuxt-link>&nbsp;|
          <nuxt-link to="/" class="hover:text-gray-200">Home</nuxt-link>&nbsp;|
          <nuxt-link to="/leads" class="hover:text-gray-200">Leads</nuxt-link>&nbsp;|
          <nuxt-link to="/quotes" class="hover:text-gray-200">Quotes</nuxt-link>&nbsp;|
          <nuxt-link to="/purchase-orders" class="hover:text-gray-200">Purchase Orders</nuxt-link>&nbsp;|
          <nuxt-link to="/installations" class="hover:text-gray-200">Installations</nuxt-link>&nbsp;|
          <nuxt-link to="/invoices" class="hover:text-gray-200">Invoices</nuxt-link>&nbsp;|
          <nuxt-link to="/contact" class="hover:text-gray-200">Contact us</nuxt-link>
        </template>
        <template v-else-if="userStore.user.role === 'sales'">
          <nuxt-link to="/" class="hover:text-gray-200">Home</nuxt-link>&nbsp;|
          <nuxt-link to="/leads" class="hover:text-gray-200">Leads</nuxt-link>&nbsp;|
          <nuxt-link to="/quotes" class="hover:text-gray-200">Quotes</nuxt-link>&nbsp;|
          <nuxt-link to="/installations" class="hover:text-gray-200">Installations</nuxt-link>
        </template>
        <template v-else-if="userStore.user.role === 'customer'">
          <nuxt-link to="/" class="hover:text-gray-200">Home</nuxt-link>&nbsp;|
          <nuxt-link to="/browse/1" class="hover:text-gray-200">Installation</nuxt-link>&nbsp;|
          <nuxt-link to="/about" class="hover:text-gray-200">About us</nuxt-link>
        </template> 
      </nav>
      <!-- Drawer content goes here -->
    </div>
  </template>

  <script setup lang="ts">
  import { useUserStore } from "@/stores/users";

  const userStore = useUserStore();
 
  </script>

  