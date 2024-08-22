<template>
  <div class="w-full bg-amber-200">현재 산: {{ mountain }}</div>
</template>

<script setup lang="ts">
const { mountain } = defineProps({
  mountain: String,
});
</script>
