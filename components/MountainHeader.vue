<template>
  <div class="w-full bg-fuchsia-200 flex items-center justify-between py-4">
    <div>
      <h2>자식1 컴포넌트</h2>
      <h2>현재 산: {{ selectedMountain }}</h2>
    </div>
    <UInputMenu v-model="selectedMountain" :options="mountainList" />
  </div>
</template>

<script setup lang="ts">
const mountainList = ["북한산", "관악산", "아차산"];
const selectedMountain = ref(mountainList[0]);
const emit = defineEmits(["changeMountain"]);

onMounted(() => {
  console.log("mounted");
  emit("changeMountain", selectedMountain.value);
});

watch(selectedMountain, () => {
  console.log("watch!");
  emit("changeMountain", selectedMountain.value);
});
</script>
