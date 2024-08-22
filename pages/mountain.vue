<template>
  <div class="px-4 flex flex-col gap-4">
    <MountainHeader @change-mountain="(args) => (mountainName = args)" />
    <MountainList :mountain="mountainName" />
  </div>
</template>

<script setup lang="ts">
const mountainName = ref("");
</script>
