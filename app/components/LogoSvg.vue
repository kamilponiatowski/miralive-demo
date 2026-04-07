<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
})

const sizeClasses: Record<string, string> = {
  sm: 'h-7',
  md: 'h-10',
  lg: 'h-12',
}
</script>

<template>
  <!-- Inline SVG logo — fills adapt via CSS custom properties for dark mode -->
  <svg
    viewBox="0 0 320 80"
    xmlns="http://www.w3.org/2000/svg"
    class="w-auto"
    :class="sizeClasses[size]"
    aria-label="Miralive Ubezpieczenia"
    role="img"
  >
    <!-- Sygnatura: trzy pasy marki -->
    <rect x="10" y="15" width="10" height="50" rx="1.5" fill="#E31E24" />
    <rect x="26" y="15" width="10" height="50" rx="1.5" fill="var(--text)" />
    <rect x="42" y="15" width="10" height="50" rx="1.5" fill="var(--text-muted)" />
    <!-- Logotyp: MIRALIVE -->
    <text
      x="68"
      y="46"
      font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif"
      font-weight="700"
      font-size="36"
      letter-spacing="-0.5"
      fill="var(--text)"
    >
      MIRA<tspan fill="#E31E24">LIVE</tspan>
    </text>
    <!-- Tagline: UBEZPIECZENIA -->
    <text
      x="70"
      y="66"
      font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif"
      font-weight="400"
      font-size="13"
      letter-spacing="4"
      fill="var(--text-muted)"
    >
      UBEZPIECZENIA
    </text>
  </svg>
</template>
