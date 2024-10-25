<template>
  <div>
    <div>헤더</div>
    <div>
      <div class="text-red-400" v-for="currency in data" :key="currency.code">
        <pre>{{ currency }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Currency } from "@faker-js/faker";
const { data } = await useAsyncData("currency", () =>
  $fetch("/api/currency", {
    query: {
      size: 100,
    },
  }),
);
</script>
