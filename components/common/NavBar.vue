<template>
  <nav class="container mx-auto">
    <ul class="flex items-center justify-center gap-4 text-xl">
      <li v-for="navLink in NAV_LINKS" :key="navLink.label">
        <NuxtLink :to="navLink.link" :class="isActivePath(navLink.link)">{{
          navLink.label
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

function isActivePath(link: string) {
  if (link === "/") return link === route.fullPath ? "text-red-500" : "";
  return route.fullPath.startsWith(link) ? "text-red-500" : "";
}
</script>
