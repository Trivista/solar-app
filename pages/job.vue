<template>
    <div class="py-10 px-6">
        <div class="md:col-span-3">
            <h1 class="mb-6 text-2xl">Create Job</h1>

            <form class="space-y-4">
                <div>
                        <label >Quote Number</label>

                        <input type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-200" placeholder="Quote number">
                    </div>
                <div>
                    
                    <label >Stock item</label>

                    <select class="w-full mt-2 p-4 rounded-xl bg-gray-200">
                        <option value="">Select stock</option>
                        <option value="sc1">Stock code 1</option>
                        <option value="sc2">Stock code 2</option>
                        <option value="sc3">Stock code 3</option>
                    </select>
                </div>
                <div>
                    <label >Product/Service Description</label>

                    <textarea class="w-full mt-2 p-4 rounded-xl bg-gray-200" placeholder="Supplier products/services description" />
                </div>
                
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