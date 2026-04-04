<script setup lang="ts">
interface Props {
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  hover: true,
})
</script>

<template>
  <div
    class="bg-card border border-card-border rounded-2xl overflow-hidden transition-all duration-300"
    :class="hover ? 'hover:-translate-y-1 hover:shadow-xl hover:border-brand' : ''"
  >
    <div v-if="$slots.image">
      <slot name="image" />
    </div>
    <div class="p-6">
      <div v-if="$slots.header" class="mb-3">
        <slot name="header" />
      </div>
      <slot />
      <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-card-border">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
