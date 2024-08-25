<template>
  <nav class="container mx-auto">
    <ul class="flex items-center justify-center gap-4">
      <li v-for="navLink in NAV_LINKS" :key="navLink.label">
        <NuxtLink :to="navLink.link">{{ navLink.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
