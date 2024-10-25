<template>
  <div>
    <!--  header-->
    <div>헤더</div>
    <div>
      <div v-for="currency in DUMMY_CURRENCY" :key="currency.code">
        <pre>{{ currency }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faker } from "@faker-js/faker";

const DUMMY_CURRENCY = faker.helpers
  .uniqueArray(faker.finance.currency, 100)
  .sort((a, b) => (a.name < b.name ? -1 : 1));
console.log(DUMMY_CURRENCY);
</script>
