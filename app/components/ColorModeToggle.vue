<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    aria-label="Przełącz tryb jasny/ciemny"
    class="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-page-alt transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none"
    @click="toggleColorMode"
  >
    <Icon v-if="colorMode.value === 'dark'" name="lucide:sun" class="w-5 h-5" />
    <Icon v-else name="lucide:moon" class="w-5 h-5" />
  </button>
</template>
