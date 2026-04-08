<script setup lang="ts">
const show = ref(false)
const popupStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const POPUP_DAILY_KEY = 'miralive_no_popup'
const DELAY_MS = 45_000

const popupPhone = ref('')
const popupConsent = ref(false)
const popupPhoneError = ref('')
const phonePattern = /^[+]?[\d\s()-]{7,18}$/

const getTodayStr = () => new Date().toISOString().slice(0, 10)
const isSuppressedToday = () => localStorage.getItem(POPUP_DAILY_KEY) === getTodayStr()
const suppressToday = () => localStorage.setItem(POPUP_DAILY_KEY, getTodayStr())

onMounted(() => {
  if (isSuppressedToday()) return

  const timer = setTimeout(() => {
    if (!isSuppressedToday()) {
      show.value = true
    }
  }, DELAY_MS)

  onUnmounted(() => clearTimeout(timer))
})

watch(popupPhone, (val) => {
  if (val.trim()) suppressToday()
})

const dismiss = () => {
  suppressToday()
  show.value = false
}

const submitPopup = async () => {
  popupPhoneError.value = ''
  if (!popupPhone.value.trim()) {
    popupPhoneError.value = 'Podaj numer telefonu.'
    return
  }
  if (!phonePattern.test(popupPhone.value.trim())) {
    popupPhoneError.value = 'Podaj poprawny numer telefonu.'
    return
  }
  popupStatus.value = 'sending'
  try {
    const response = await fetch('https://formsubmit.co/ajax/kontakt@miralive.pl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        phone: popupPhone.value,
        _subject: 'Nowy kontakt z popupu Miralive',
        _template: 'table',
      }),
    })
    if (response.ok) {
      popupStatus.value = 'success'
      suppressToday()
      setTimeout(() => { show.value = false }, 2000)
    } else {
      popupStatus.value = 'error'
    }
  } catch {
    popupStatus.value = 'error'
  }
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

            <!-- Success state -->
            <template v-if="popupStatus === 'success'">
              <div class="icon-glass w-16 h-16 mx-auto mb-5">
                <Icon name="lucide:check-circle" class="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 class="text-xl font-extrabold text-ink mb-3">Dziękuję!</h2>
              <p class="text-ink-muted text-sm leading-relaxed">
                Oddzwonię najszybciej jak to możliwe.
              </p>
            </template>

            <!-- Form state -->
            <template v-else>
              <div class="icon-glass w-16 h-16 mx-auto mb-5">
                <Icon name="lucide:message-circle" class="w-8 h-8 text-brand" />
              </div>

              <h2 id="popup-title" class="text-xl font-extrabold text-ink mb-3">
                Potrzebujesz porady ubezpieczeniowej?
              </h2>
              <p class="text-ink-muted text-sm leading-relaxed mb-6">
                Zostaw swój numer telefonu — oddzwonię i bezpłatnie przeanalizuję Twoje potrzeby.
                Bez zobowiązań.
              </p>

              <form class="flex flex-col gap-4" @submit.prevent="submitPopup">
                <input
                  v-model="popupPhone"
                  type="tel"
                  required
                  autocomplete="tel"
                  inputmode="tel"
                  placeholder="Twój numer telefonu"
                  class="w-full px-4 py-3 rounded-xl border bg-page text-ink placeholder:text-ink-muted/50 transition-all duration-300 focus:ring-2 focus:outline-none text-center"
                  :class="popupPhoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-card-border focus:border-brand focus:ring-brand/20'"
                />
                <p v-if="popupPhoneError" class="mt-1 text-sm text-red-500 text-left">{{ popupPhoneError }}</p>

                <div class="flex items-start gap-3 text-left">
                  <input
                    id="popup-consent"
                    v-model="popupConsent"
                    type="checkbox"
                    required
                    class="mt-1 h-4 w-4 rounded border-card-border text-brand focus:ring-brand/20"
                  />
                  <label for="popup-consent" class="text-xs text-ink-muted leading-relaxed">
                    Wyrażam zgodę na kontakt telefoniczny w celu przedstawienia oferty ubezpieczeniowej. Zapoznałem/am się z
                    <NuxtLink to="/polityka-prywatnosci" class="text-brand-text hover:underline font-medium" target="_blank">Polityką Prywatności</NuxtLink>.
                  </label>
                </div>

                <div v-if="popupStatus === 'error'" class="text-sm text-red-600 dark:text-red-400">
                  Wystąpił błąd. Spróbuj ponownie.
                </div>

                <button
                  type="submit"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-hover shadow-glow transition-all duration-300"
                  :class="{ 'opacity-70 pointer-events-none': popupStatus === 'sending' }"
                >
                  <Icon v-if="popupStatus === 'sending'" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
                  <Icon v-else name="lucide:send" class="w-5 h-5" />
                  {{ popupStatus === 'sending' ? 'Wysyłam...' : 'Zostaw numer' }}
                </button>
              </form>

              <button
                class="text-sm text-ink-muted hover:text-ink transition-all duration-300 mt-3"
                @click="dismiss"
              >
                Nie teraz, dziękuję
              </button>
            </template>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
