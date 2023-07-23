<template>
   
    <div class="p-6 flex items-center justify-between bg-gray-200 rounded-xl">
        <div>
            <h3 class="mb-2 text-xl font-semibold">Customer 1</h3>
            <!-- <p class="text-gray-600">The company name</p> -->
        </div>
        <div class="text-center">
            <h3 class="mb-2 text-xl font-semibold">Installation Type</h3>
            <p class="text-gray-600">Installation details</p>
        </div>
        <div class="space-x-4">
            <nuxt-link to="/browse/1" class="py-4 px-6 bg-teal-700 text-white rounded-xl">Details</nuxt-link>
            <nuxt-link to="/browse/1" class="py-4 px-6 bg-teal-700 text-white rounded-xl" v-if="admin">Allocate</nuxt-link>
            <nuxt-link to="/job" class="py-4 px-6 bg-cyan-700 text-white rounded-xl" v-if="admin">Edit job</nuxt-link>
            <nuxt-link to="/browse/1" class="py-4 px-6 bg-rose-700 text-white rounded-xl" v-if="admin">Delete</nuxt-link>
        </div> 
    </div>      
   
</template>
<script setup>
const props = defineProps({
    admin: {
        type: Boolean,
        required: true
    },
    // customer: {
    //     type: Object,
    //     required: true
    // }
})
</script>