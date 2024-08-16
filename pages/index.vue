<template>
  <div>
    <h2>root page</h2>
    <h2>random number: {{ randomNumber }}</h2>
  </div>
</template>

<script setup lang="ts">
const mathStore = useMathStore();
const randomNumber = await mathStore.getRandomNumber();
</script>
