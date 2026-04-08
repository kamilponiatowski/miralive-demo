<script setup lang="ts">
const business = useBusinessData()
const { isOpen, statusText } = useOpenStatus()

useSeoMeta({
  title: `Kontakt — ${business.name}`,
  description: `Skontaktuj się z ${business.name}. Telefon: ${business.contact.phone[0]}, email: ${business.contact.email}. ${business.address.street}, ${business.address.city}.`,
  ogTitle: `Kontakt — ${business.name}`,
  ogDescription: `Umów bezpłatną konsultację ubezpieczeniową. Telefon: ${business.contact.phone[0]}.`,
})

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  privacy: false,
})

const formStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const formErrors = reactive<Record<string, string>>({})

const phonePattern = /^[+]?[\d\s()-]{7,18}$/
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateForm = (): boolean => {
  Object.keys(formErrors).forEach((k) => delete formErrors[k])

  if (!formData.name.trim()) formErrors.name = 'Podaj imię i nazwisko.'
  if (!formData.phone.trim()) formErrors.phone = 'Podaj numer telefonu.'
  else if (!phonePattern.test(formData.phone.trim())) formErrors.phone = 'Podaj poprawny numer telefonu (tylko cyfry, spacje, +).'
  if (formData.email && !emailPattern.test(formData.email.trim())) formErrors.email = 'Podaj poprawny adres email.'
  if (!formData.privacy) formErrors.privacy = 'Zgoda jest wymagana.'

  return Object.keys(formErrors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  formStatus.value = 'sending'
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      }),
    })
    if (response.ok) {
      formStatus.value = 'success'
      localStorage.setItem('miralive_no_popup', new Date().toISOString().slice(0, 10))
      formData.name = ''
      formData.phone = ''
      formData.email = ''
      formData.message = ''
      formData.privacy = false
    } else {
      formStatus.value = 'error'
    }
  } catch {
    formStatus.value = 'error'
  }
}
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="brand" class="mb-4">Kontakt</Badge>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4">
              Skontaktuj się ze mną
            </h1>
            <p class="text-lg text-ink-muted leading-relaxed">
              Zadzwoń, napisz lub odwiedź mnie osobiście. Bezpłatna konsultacja ubezpieczeniowa
              — przeanalizuję Twoje potrzeby i dobiorę najlepszą ochronę.
            </p>
          </div>
          <div class="flex justify-center lg:justify-end">
            <NuxtImg
              src="/images/kontakt.png"
              alt="Mirosława Poniatowska — kontakt Miralive"
              width="480"
              height="560"
              class="rounded-2xl shadow-xl w-full max-w-xs lg:max-w-sm object-cover object-top"
              loading="eager"
              format="webp"
            />
          </div>
        </div>
      </Container>
    </section>

    <!-- Contact Form -->
    <section id="formularz" class="py-12 md:py-16 scroll-mt-24">
      <Container>
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-8">
            <Badge color="brand" class="mb-4">Formularz</Badge>
            <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-4">
              Zostaw kontakt — oddzwonię
            </h2>
            <p class="text-ink-muted">
              Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin.
            </p>
          </div>

          <!-- Success -->
          <div v-if="formStatus === 'success'" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
            <div class="icon-glass w-16 h-16 mx-auto mb-4">
              <Icon name="lucide:check-circle" class="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-semibold text-ink mb-2">Wiadomość wysłana!</h3>
            <p class="text-ink-muted mb-6">Dziękuję za kontakt. Odezwę się najszybciej jak to możliwe.</p>
            <Button variant="outline" size="md" @click="formStatus = 'idle'">
              Wyślij kolejną wiadomość
            </Button>
          </div>

          <!-- Form -->
          <Card v-else :hover="false">
            <form @submit.prevent="submitForm" class="space-y-5">
              <div>
                <label for="form-name" class="block text-sm font-medium text-ink mb-1.5">
                  Imię i nazwisko <span class="text-red-500">*</span>
                </label>
                <input
                  id="form-name"
                  v-model="formData.name"
                  type="text"
                  required
                  autocomplete="name"
                  placeholder="Jan Kowalski"
                  class="w-full px-4 py-3 rounded-xl border bg-page text-ink placeholder:text-ink-muted/50 transition-all duration-300 focus:ring-2 focus:outline-none"
                  :class="formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-card-border focus:border-brand focus:ring-brand/20'"
                />
                <p v-if="formErrors.name" class="mt-1 text-sm text-red-500">{{ formErrors.name }}</p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="form-phone" class="block text-sm font-medium text-ink mb-1.5">
                    Telefon <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="form-phone"
                    v-model="formData.phone"
                    type="tel"
                    required
                    autocomplete="tel"
                    inputmode="tel"
                    placeholder="600 000 000"
                    class="w-full px-4 py-3 rounded-xl border bg-page text-ink placeholder:text-ink-muted/50 transition-all duration-300 focus:ring-2 focus:outline-none"
                    :class="formErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-card-border focus:border-brand focus:ring-brand/20'"
                  />
                  <p v-if="formErrors.phone" class="mt-1 text-sm text-red-500">{{ formErrors.phone }}</p>
                </div>
                <div>
                  <label for="form-email" class="block text-sm font-medium text-ink mb-1.5">
                    Email
                  </label>
                  <input
                    id="form-email"
                    v-model="formData.email"
                    type="email"
                    autocomplete="email"
                    inputmode="email"
                    placeholder="jan@example.com"
                    class="w-full px-4 py-3 rounded-xl border bg-page text-ink placeholder:text-ink-muted/50 transition-all duration-300 focus:ring-2 focus:outline-none"
                    :class="formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-card-border focus:border-brand focus:ring-brand/20'"
                  />
                  <p v-if="formErrors.email" class="mt-1 text-sm text-red-500">{{ formErrors.email }}</p>
                </div>
              </div>

              <div>
                <label for="form-message" class="block text-sm font-medium text-ink mb-1.5">
                  Wiadomość
                </label>
                <textarea
                  id="form-message"
                  v-model="formData.message"
                  rows="4"
                  placeholder="Czego dotyczy Twoje zapytanie? (opcjonalnie)"
                  class="w-full px-4 py-3 rounded-xl border border-card-border bg-page text-ink placeholder:text-ink-muted/50 transition-all duration-300 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none resize-y"
                />
              </div>

              <!-- Privacy consent -->
              <div class="flex items-start gap-3">
                <input
                  id="form-privacy"
                  v-model="formData.privacy"
                  type="checkbox"
                  required
                  class="mt-1 h-4 w-4 rounded border-card-border text-brand focus:ring-brand/20"
                />
                <label for="form-privacy" class="text-sm text-ink-muted leading-relaxed">
                  Zapoznałem/am się z <NuxtLink to="/polityka-prywatnosci" class="text-brand-text hover:underline font-medium" target="_blank">Polityką Prywatności</NuxtLink>
                  i wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie. <span class="text-red-500">*</span>
                </label>
              </div>

              <!-- Error -->
              <div v-if="formStatus === 'error'" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-sm text-red-700 dark:text-red-400 flex items-center gap-2">
                <Icon name="lucide:alert-circle" class="w-5 h-5 shrink-0" />
                Wystąpił błąd. Spróbuj ponownie lub zadzwoń bezpośrednio.
              </div>

              <div class="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  type="submit"
                  size="lg"
                  class="w-full sm:w-auto"
                  :class="{ 'opacity-70 pointer-events-none': formStatus === 'sending' }"
                >
                  <Icon v-if="formStatus === 'sending'" name="lucide:loader-2" class="w-5 h-5 mr-2 animate-spin" />
                  <Icon v-else name="lucide:send" class="w-5 h-5 mr-2" />
                  {{ formStatus === 'sending' ? 'Wysyłam...' : 'Wyślij wiadomość' }}
                </Button>
                <p class="text-xs text-ink-muted">
                  Odpowiadam w ciągu 24 godzin w dni robocze.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Contact Cards -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- Phone -->
          <Card>
            <div class="text-center">
              <div class="icon-glass w-14 h-14 mx-auto mb-4">
                <Icon name="lucide:phone" class="w-7 h-7 text-brand" />
              </div>
              <h2 class="font-semibold text-ink mb-2">Telefon</h2>
              <a
                v-for="phone in business.contact.phone"
                :key="phone"
                :href="`tel:${phone.replace(/\\s/g, '')}`"
                class="block text-lg text-brand-text font-medium hover:underline transition-all duration-300"
              >
                {{ phone }}
              </a>
            </div>
          </Card>

          <!-- Email -->
          <Card>
            <div class="text-center">
              <div class="icon-glass w-14 h-14 mx-auto mb-4">
                <Icon name="lucide:mail" class="w-7 h-7 text-brand" />
              </div>
              <h2 class="font-semibold text-ink mb-2">Email</h2>
              <a
                :href="`mailto:${business.contact.email}`"
                class="text-lg text-brand-text font-medium hover:underline transition-all duration-300"
              >
                {{ business.contact.email }}
              </a>
            </div>
          </Card>

          <!-- Address -->
          <Card>
            <div class="text-center">
              <div class="icon-glass w-14 h-14 mx-auto mb-4">
                <Icon name="lucide:map-pin" class="w-7 h-7 text-brand" />
              </div>
              <h2 class="font-semibold text-ink mb-2">Adres</h2>
              <a
                :href="business.social.googleMaps"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg text-brand-text font-medium hover:underline transition-all duration-300"
              >
                {{ business.address.street }}<br>
                {{ business.address.postalCode }} {{ business.address.city }}
              </a>
            </div>
          </Card>
        </div>

        <!-- Opening Hours -->
        <div class="max-w-lg mx-auto">
          <Card :hover="false">
            <div class="text-center mb-6">
              <h2 class="text-xl font-semibold text-ink mb-2">Godziny otwarcia</h2>
              <ClientOnly>
                <Badge :color="isOpen ? 'green' : 'red'" :dot="true">
                  {{ statusText }}
                </Badge>
                <template #fallback>
                  <Badge color="gray">Sprawdzam...</Badge>
                </template>
              </ClientOnly>
            </div>
            <div class="space-y-3">
              <div
                v-for="schedule in business.hours.regular"
                :key="schedule.days"
                class="flex justify-between items-center py-2 border-b border-card-border last:border-0"
              >
                <span class="font-medium text-ink">{{ schedule.days }}</span>
                <span class="text-ink-muted">{{ schedule.open }} – {{ schedule.close }}</span>
              </div>
              <div
                v-for="day in business.hours.closed"
                :key="day"
                class="flex justify-between items-center py-2"
              >
                <span class="font-medium text-ink">{{ day }}</span>
                <span class="text-ink-muted">Zamknięte</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Map -->
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
            Znajdź mnie na mapie
          </h2>
          <a
            :href="business.social.googleMaps"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border-2 border-brand text-brand-text hover:bg-brand hover:text-white transition-all duration-300"
          >
            <Icon name="lucide:navigation" class="w-4 h-4" />
            Nawiguj do mnie
          </a>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg border border-card-border aspect-video">
          <iframe
            :src="`https://maps.google.com/maps?q=${business.geo.latitude},${business.geo.longitude}&z=15&output=embed`"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa lokalizacji Miralive"
          />
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-4">
            Zadzwoń teraz
          </h2>
          <p class="text-ink-muted mb-8">
            Nie czekaj — porozmawiajmy o Twoim ubezpieczeniu. Pierwsza konsultacja jest zawsze bezpłatna.
          </p>
          <Button :href="`tel:${business.contact.phone[0].replace(/\\s/g, '')}`" size="xl" class="pulse-brand">
            <Icon name="lucide:phone" class="w-6 h-6 mr-2" />
            {{ business.contact.phone[0] }}
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>
