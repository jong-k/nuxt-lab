<template>
  <div>
    <h2>UTabs Test</h2>
    <div>
      <UTabs
        :ui="{
          list: { background: 'bg-blue-500', marker: { background: 'bg-yellow-500' } },
        }"
        :items="items"
      >
        <template #account="{ item }">
          <div>{{ item.label }}</div>
        </template>

        <template #password="{ item }">
          <div>{{ item.label }}</div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    slot: "account",
    label: "Account",
  },
  {
    slot: "password",
    label: "Password",
  },
];
</script>
