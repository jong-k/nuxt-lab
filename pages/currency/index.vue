<template>
  <div class="flex flex-col gap-4">
    <div class="w-full p-2 bg-gradient-to-r from-red-100 to-red-500">
      <div>
        take: {{ takeRef }}
        <URange color="teal" :min="5" :max="95" :step="5" v-model="takeRef" />
      </div>
    </div>
    <div>
      <div class="flex items-center" v-for="(currency, idx) in data" :key="currency.code">
        <div class="text-2xl text-teal-400">{{ idx }}</div>
        <pre>{{ currency }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const takeRef = ref(20);
const debouncedTakeRef = refDebounced(takeRef, 400);

const { data } = await useAsyncData(
  "currency",
  () =>
    $fetch("/api/currency", {
      query: {
        take: debouncedTakeRef.value,
      },
    }),
  {
    watch: [debouncedTakeRef],
  },
);
</script>
