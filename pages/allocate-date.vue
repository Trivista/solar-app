<template>
  <div class="py-10 px-6">
        <div class="md:col-span-3">
            <h1 class="mb-6 text-2xl">Allocate Installation Dates</h1>
        </div>
        <div class="space-y-4">
          <Customer :admin="true"/>
        </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default-layout",
});
</script>

<style scoped></style>
