<template>
  <div class="flex flex-col gap-10">
    <div class="w-full bg-green-200">
      <h2 class="text-xl my-4">카페 메뉴 검색</h2>
      <div class="w-[20rem]">
        <UInput v-model="searchValue" />
      </div>
    </div>
    <div class="w-full bg-green-200">
      <h2>{{ searchValue }}</h2>
      <h2 class="text-xl my-4">결과</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchValue = ref("");
const debouncedSearchValue = refDebounced(searchValue, 500);
const { data } = await useAsyncData(
  debouncedSearchValue.value,
  () =>
    $fetch("/api/menu", {
      query: {
        name: debouncedSearchValue.value,
      },
    }),
  {
    watch: [debouncedSearchValue],
  },
);
</script>
