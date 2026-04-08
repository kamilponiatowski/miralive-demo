<script setup lang="ts">
const show = ref(false)
const STORAGE_KEY = 'miralive_cookies_consent'

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    show.value = true
  }
})

const accept = () => {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  show.value = false
}

const reject = () => {
  localStorage.setItem(STORAGE_KEY, 'rejected')
  show.value = false
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="show"
        class="fixed bottom-0 inset-x-0 z-100 p-4 sm:p-6"
      >
        <div class="mx-auto max-w-3xl bg-card border border-card-border rounded-2xl shadow-2xl p-5 sm:p-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="flex-1">
              <p class="text-sm text-ink leading-relaxed">
                Używamy plików cookies, aby zapewnić prawidłowe działanie strony i zapamiętać Twoje preferencje.
                <NuxtLink to="/polityka-cookies" class="text-brand-text hover:underline font-medium">
                  Dowiedz się więcej
                </NuxtLink>
              </p>
            </div>
            <div class="flex items-center gap-3 shrink-0">
              <button
                class="px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink rounded-xl border border-card-border hover:bg-page-alt transition-all duration-300"
                @click="reject"
              >
                Odrzuć
              </button>
              <button
                class="px-4 py-2 text-sm font-semibold text-white bg-brand hover:bg-brand-hover rounded-xl shadow-glow transition-all duration-300"
                @click="accept"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
