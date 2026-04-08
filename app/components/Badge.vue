<script setup lang="ts">
interface Props {
  color?: 'brand' | 'green' | 'red' | 'blue' | 'yellow' | 'gray'
  dot?: boolean
}

withDefaults(defineProps<Props>(), {
  color: 'brand',
  dot: false,
})

const colorClasses: Record<string, string> = {
  brand: 'bg-brand-subtle text-brand-text',
  green: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  red: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  yellow: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  gray: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
}
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
    :class="colorClasses[color]"
  >
    <span v-if="dot" class="pulse-dot pl-3" />
    <slot />
  </span>
</template>
