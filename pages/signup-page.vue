<template>
    <div class="py-10 px-6">
      <div class="max-w-sm mx-auto py-10 px-6 bg-gray-200 rounded-xl">
        <h1 class="mb-6 text-2xl">Sign up</h1>
  
        <form>
          <input type="email" placeholder="Your email address..." class="w-full mb-4 py-4 px-6 rounded-xl">
          <input type="password" placeholder="Your password..." class="w-full mb-4 py-4 px-6 rounded-xl">
          <input type="password" placeholder="Repeat password..." class="w-full mb-4 py-4 px-6 rounded-xl">
  
          <button class="py-4 px-6 bg-gray-500 text-white rounded-xl">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "default-layout",
  });
  </script>
  
  <style scoped></style>