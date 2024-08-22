<template>
  <div class="w-full bg-fuchsia-200">
    <h2>자식2컴포넌트</h2>
    <h2>현재 산: {{ mountain }}</h2>
  </div>
</template>

<script setup lang="ts">
const { mountain } = defineProps({
  mountain: String,
});
</script>
