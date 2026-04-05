<script setup lang="ts">
const business = useBusinessData()

const navLinks = [
  { label: 'Strona główna', to: '/' },
  { label: 'Usługi', to: '/uslugi' },
  { label: 'O mnie', to: '/o-mnie' },
  { label: 'Kontakt', to: '/kontakt' },
]

const mobileMenuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

const currentYear = ref(new Date().getFullYear())
onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<template>
  <div class="min-h-screen bg-page text-ink">
    <!-- Skip to content -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
    >
      Przejdź do treści
    </a>

    <!-- Header -->
    <header class="glass sticky top-0 z-50">
      <Container>
        <nav class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-brand transition-all duration-300 hover:opacity-80">
            <Icon name="lucide:shield-check" class="w-7 h-7" />
            <span class="tracking-tight">{{ business.name }}</span>
          </NuxtLink>

          <!-- Desktop nav -->
          <div class="hidden lg:flex items-center gap-1">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="px-4 py-2 text-sm font-medium text-ink-muted hover:text-brand rounded-lg transition-all duration-300 hover:bg-page-alt"
              active-class="!text-brand !bg-brand-subtle"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <!-- Desktop actions -->
          <div class="hidden lg:flex items-center gap-3">
            <ColorModeToggle />
          </div>

          <!-- Mobile actions -->
          <div class="flex lg:hidden items-center gap-2">
            <ColorModeToggle />
            <button
              aria-label="Toggle menu"
              class="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-page-alt transition-all duration-300"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <Icon v-if="mobileMenuOpen" name="lucide:x" class="w-6 h-6" />
              <Icon v-else name="lucide:menu" class="w-6 h-6" />
            </button>
          </div>
        </nav>

        <!-- Mobile menu -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileMenuOpen" class="lg:hidden pb-4 border-t border-nav-border mt-2 pt-4">
            <div class="flex flex-col gap-1">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="px-4 py-3 text-sm font-medium text-ink-muted hover:text-brand rounded-lg transition-all duration-300 hover:bg-page-alt"
                active-class="!text-brand !bg-brand-subtle"
              >
                {{ link.label }}
              </NuxtLink>
              <div class="mt-2 px-4">
                <Button :href="`tel:${business.contact.phone[0].replace(/\s/g, '')}`" size="md" class="w-full justify-center">
                  <Icon name="lucide:phone" class="w-4 h-4 mr-2" />
                  Zadzwoń
                </Button>
              </div>
            </div>
          </div>
        </Transition>
      </Container>
    </header>

    <!-- Main -->
    <main id="main-content">
      <slot />
    </main>

    <!-- First-visit contact popup -->
    <ClientOnly>
      <ContactPopup />
    </ClientOnly>

    <!-- Cookies consent banner -->
    <ClientOnly>
      <CookiesBanner />
    </ClientOnly>

    <!-- Footer -->
    <footer class="bg-page-alt border-t border-card-border">
      <Container>
        <div class="py-12 md:py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <!-- Brand -->
            <div class="lg:col-span-1">
              <NuxtLink to="/" class="flex items-center gap-2 font-bold text-lg text-brand mb-4">
                <Icon name="lucide:shield-check" class="w-6 h-6" />
                <span>{{ business.name }}</span>
              </NuxtLink>
              <p class="text-sm text-ink-muted leading-relaxed">
                {{ business.description }}
              </p>
            </div>

            <!-- Navigation -->
            <div>
              <h3 class="font-semibold text-ink mb-4">Nawigacja</h3>
              <ul class="space-y-2">
                <li v-for="link in navLinks" :key="link.to">
                  <NuxtLink
                    :to="link.to"
                    class="text-sm text-ink-muted hover:text-brand transition-all duration-300"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Contact -->
            <div>
              <h3 class="font-semibold text-ink mb-4">Kontakt</h3>
              <ul class="space-y-2">
                <li v-for="phone in business.contact.phone" :key="phone">
                  <a
                    :href="`tel:${phone.replace(/\s/g, '')}`"
                    class="text-sm text-ink-muted hover:text-brand transition-all duration-300 flex items-center gap-2"
                  >
                    <Icon name="lucide:phone" class="w-4 h-4" />
                    {{ phone }}
                  </a>
                </li>
                <li>
                  <a
                    :href="`mailto:${business.contact.email}`"
                    class="text-sm text-ink-muted hover:text-brand transition-all duration-300 flex items-center gap-2"
                  >
                    <Icon name="lucide:mail" class="w-4 h-4" />
                    {{ business.contact.email }}
                  </a>
                </li>
                <li>
                  <a
                    :href="business.social.googleMaps"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-ink-muted hover:text-brand transition-all duration-300 flex items-center gap-2"
                  >
                    <Icon name="lucide:navigation" class="w-4 h-4" />
                    Nawiguj do mnie
                  </a>
                </li>
              </ul>
            </div>

            <!-- Hours -->
            <div>
              <h3 class="font-semibold text-ink mb-4">Godziny otwarcia</h3>
              <ul class="space-y-2">
                <li
                  v-for="schedule in business.hours.regular"
                  :key="schedule.days"
                  class="text-sm text-ink-muted flex justify-between"
                >
                  <span>{{ schedule.days }}</span>
                  <span>{{ schedule.open }} – {{ schedule.close }}</span>
                </li>
                <li
                  v-for="day in business.hours.closed"
                  :key="day"
                  class="text-sm text-ink-muted flex justify-between"
                >
                  <span>{{ day }}</span>
                  <span>Zamknięte</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Social & Copyright -->
          <div class="mt-12 pt-8 border-t border-card-border">
            <div class="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm">
              <NuxtLink to="/polityka-prywatnosci" class="text-ink-muted hover:text-brand transition-all duration-300">
                Polityka prywatności
              </NuxtLink>
              <span class="text-card-border">|</span>
              <NuxtLink to="/polityka-cookies" class="text-ink-muted hover:text-brand transition-all duration-300">
                Polityka cookies
              </NuxtLink>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <ClientOnly>
              <p class="text-sm text-ink-muted">
                &copy; {{ currentYear }} {{ business.legalName }}. Wszelkie prawa zastrzeżone.
              </p>
              <template #fallback>
                <p class="text-sm text-ink-muted">
                  &copy; {{ business.legalName }}. Wszelkie prawa zastrzeżone.
                </p>
              </template>
            </ClientOnly>
            <div class="flex items-center gap-3">
              <a
                v-if="business.social.facebook"
                :href="business.social.facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="p-2 rounded-lg text-ink-muted hover:text-brand hover:bg-page-alt transition-all duration-300"
              >
                <Icon name="lucide:facebook" class="w-5 h-5" />
              </a>
              <a
                v-if="business.social.googleMaps"
                :href="business.social.googleMaps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                class="p-2 rounded-lg text-ink-muted hover:text-brand hover:bg-page-alt transition-all duration-300"
              >
                <Icon name="lucide:map-pin" class="w-5 h-5" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  </div>
</template>
