<script setup lang="ts">
const show = ref(false)
const STORAGE_KEY = 'miralive_popup_shown'
const DELAY_MS = 45_000 // 45 seconds — enough time to browse but before typical bounce

onMounted(() => {
  if (localStorage.getItem(STORAGE_KEY)) return

  const timer = setTimeout(() => {
    show.value = true
    localStorage.setItem(STORAGE_KEY, '1')
  }, DELAY_MS)

  // Clear if user navigates away before timer fires
  onUnmounted(() => clearTimeout(timer))
})

const dismiss = () => {
  show.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-200 flex items-center justify-center p-4"
        @click.self="dismiss"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <!-- Dialog -->
        <Transition
          appear
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
        >
          <div
            v-if="show"
            class="relative bg-card border border-card-border rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <!-- Close button -->
            <button
              class="absolute top-3 right-3 p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-page-alt transition-all duration-300"
              aria-label="Zamknij"
              @click="dismiss"
            >
              <Icon name="lucide:x" class="w-5 h-5" />
            </button>

            <div class="icon-glass w-16 h-16 mx-auto mb-5">
              <Icon name="lucide:message-circle" class="w-8 h-8 text-brand" />
            </div>

            <h2 id="popup-title" class="text-xl font-extrabold text-ink mb-3">
              Potrzebujesz porady ubezpieczeniowej?
            </h2>
            <p class="text-ink-muted text-sm leading-relaxed mb-6">
              Zostaw swój kontakt — oddzwonię i bezpłatnie przeanalizuję Twoje potrzeby.
              Bez zobowiązań.
            </p>

            <div class="flex flex-col gap-3">
              <NuxtLink
                to="/kontakt#formularz"
                class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-hover shadow-glow transition-all duration-300"
                @click="dismiss"
              >
                <Icon name="lucide:send" class="w-5 h-5" />
                Zostaw kontakt
              </NuxtLink>
              <button
                class="text-sm text-ink-muted hover:text-ink transition-all duration-300"
                @click="dismiss"
              >
                Nie teraz, dziękuję
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
