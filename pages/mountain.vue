<template>
  <div class="p-6 flex flex-col gap-4 w-full bg-amber-200">
    <h2>부모 컴포넌트</h2>
    <MountainHeader @change-mountain="(args) => (mountainName = args)" />
    <MountainList :mountain="mountainName" />
  </div>
</template>

<script setup lang="ts">
const mountainName = ref("");
</script>
