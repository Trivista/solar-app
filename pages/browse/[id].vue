<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="py-10 px-6 grid md:grid-cols-4 gap-3">
        <div class="md:col-span-3">
            <h1 class="mb-6 text-3xl">The Customer</h1>

            <p>Job Detail</p>

            <a href="#" class="inline-block mt-6 py-4 px-6 bg-gray-500 text-white rounded-xl">Update</a>
        </div>
        <div class="md:col-span-1 p-6 bg-gray-700 text-white rounded-xl">
            <h3 class="mb-6 text-2xl">Customer</h3>

            <p class="mb-2">Customer name</p>
            <p>Address</p>

            <hr class="my-6 opacity-30">

            <h3 class="mb-6 text-2xl">Installation</h3>
            <p class="mb-2">Location</p>

            <hr class="my-6 opacity-30">

            <h3 class="mb-6 text-2xl">Installation date</h3>
            <p class="mb-2">Date</p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default-layout",
});
</script>