<script setup lang="ts">
const business = useBusinessData()
const { isOpen, statusText } = useOpenStatus()

useSeoMeta({
  title: `Kontakt — ${business.name}`,
  description: `Skontaktuj się z ${business.name}. Telefon: ${business.contact.phone[0]}, email: ${business.contact.email}. ${business.address.street}, ${business.address.city}.`,
  ogTitle: `Kontakt — ${business.name}`,
  ogDescription: `Umów bezpłatną konsultację ubezpieczeniową. Telefon: ${business.contact.phone[0]}.`,
})
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <Badge color="brand" class="mb-4">Kontakt</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4">
            Skontaktuj się z nami
          </h1>
          <p class="text-lg text-ink-muted leading-relaxed">
            Zadzwoń, napisz lub odwiedź nas osobiście. Bezpłatna konsultacja ubezpieczeniowa
            — przeanalizujemy Twoje potrzeby i dobierzemy najlepszą ochronę.
          </p>
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
                class="block text-lg text-brand font-medium hover:underline transition-all duration-300"
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
                class="text-lg text-brand font-medium hover:underline transition-all duration-300"
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
                class="text-lg text-brand font-medium hover:underline transition-all duration-300"
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
                <Badge :color="isOpen ? 'green' : 'brand'" :dot="true">
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
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-4">
            Znajdź nas na mapie
          </h2>
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
