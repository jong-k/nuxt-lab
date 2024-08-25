<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("menu", () =>
  $fetch("/api/menu", {
    query: {
      price: 3000,
    },
  }),
);
</script>
