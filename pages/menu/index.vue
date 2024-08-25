<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("menu", () =>
  $fetch("/api/menu", {
    query: {
      name: "아이스 아메리카노",
    },
  }),
);
</script>
