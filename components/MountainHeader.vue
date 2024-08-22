<template>
  <div class="w-full bg-fuchsia-200 flex items-center justify-between py-4">
    <h2>마운틴 헤더</h2>
    <h2>현재 selectedMountain: {{ selectedMountain }}</h2>
    <UInputMenu v-model="selectedMountain" :options="mountainList" />
  </div>
</template>

<script setup lang="ts">
const mountainList = ["북한산", "관악산", "아차산"];
const selectedMountain = ref(mountainList[0]);
const emit = defineEmits(["changeMountain"]);

onMounted(() => {
  console.log(selectedMountain.value);
});

watch(selectedMountain, (newSelectedMountain) => {
  console.log(newSelectedMountain);
});
</script>
