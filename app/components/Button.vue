<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none'

const variantClasses: Record<string, string> = {
  primary: 'bg-brand text-white hover:bg-brand-hover shadow-glow',
  outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  ghost: 'text-ink hover:bg-page-alt',
  link: 'text-brand hover:underline',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
}

const classes = computed(() => [baseClasses, variantClasses[props.variant], sizeClasses[props.size]])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </NuxtLink>
  <a v-else-if="href" :href="href" target="_blank" rel="noopener noreferrer" :class="classes">
    <slot />
  </a>
  <button v-else :class="classes">
    <slot />
  </button>
</template>
