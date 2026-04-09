<script setup lang="ts">
const business = useBusinessData()
const { isOpen, statusText } = useOpenStatus()

useSchema()

useSeoMeta({
  title: `${business.name} — ${business.description}`,
  description: business.longDescription,
  ogTitle: `${business.name} — Specjalistyczne Usługi Ubezpieczeniowe`,
  ogDescription: business.longDescription,
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-mesh relative overflow-hidden">
      <Container>
        <div class="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Content -->
          <div class="order-2 lg:order-1">
            <ClientOnly>
              <Badge :color="isOpen ? 'green' : 'red'" :dot="true" class="mb-6">
                {{ statusText }}
              </Badge>
              <template #fallback>
                <Badge color="gray" class="mb-6">Sprawdzam...</Badge>
              </template>
            </ClientOnly>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-tight mb-6">
              Twoje bezpieczeństwo,
              <span class="text-brand-text">moja specjalizacja</span>
            </h1>

            <p class="text-lg md:text-xl text-ink-muted leading-relaxed mb-8 max-w-xl">
              {{ business.description }} Porównuję oferty od {{ business.partners.length }}+ towarzystw, aby znaleźć
              najlepszą ochronę dla Ciebie i Twojej rodziny.
            </p>

            <div class="flex flex-col gap-4">
              <div class="flex flex-col sm:flex-row gap-4">
                <Button to="/kup-online" variant="primary" size="lg" class="pulse-brand cta-hero-btn">
                  <Icon name="lucide:shopping-bag" class="w-5 h-5 mr-2" />
                  Kup online
                </Button>
                <Button to="/uslugi" variant="outline" size="lg" class="cta-hero-btn">
                  <Icon name="lucide:arrow-right" class="w-5 h-5 mr-2" />
                  Zobacz ofertę
                </Button>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <Button to="/kontakt#formularz" variant="ghost" size="lg" class="cta-hero-btn">
                  <Icon name="lucide:message-square" class="w-5 h-5 mr-2" />
                  Zostaw kontakt
                </Button>
                <Button to="/kontakt#formularz" size="lg" class="cta-hero-btn">
                  <Icon name="lucide:phone" class="w-5 h-5 mr-2" />
                  Umów konsultację
                </Button>
              </div>
            </div>
          </div>

          <!-- Right: Hero Image -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative">
              <NuxtImg
                src="/images/hero.png"
                alt="Mirosława Poniatowska, ekspert ubezpieczeń życiowych i zdrowotnych Miralive"
                width="560"
                height="400"
                class="rounded-2xl shadow-2xl object-cover"
                loading="eager"
                format="webp"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Trust Bar: Partner Marquee -->
    <section class="bg-page-alt py-8 border-y border-card-border overflow-hidden">
      <Container>
        <p class="text-center text-xs font-medium text-ink-muted uppercase tracking-widest mb-6">
          Współpracuję z czołowymi towarzystwami
        </p>
      </Container>
      <div class="relative overflow-hidden">
        <div class="trust-track">
          <div v-for="i in 2" :key="i" class="flex shrink-0 items-center gap-12 px-6">
            <span
              v-for="partner in business.partners"
              :key="`${i}-${partner}`"
              class="text-sm font-medium text-ink-muted whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {{ partner }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="text-center mb-12">
          <Badge color="brand" class="mb-4">Moja oferta</Badge>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Kompleksowa ochrona ubezpieczeniowa
          </h2>
          <p class="text-lg text-ink-muted max-w-2xl mx-auto">
            Od ubezpieczeń życiowych po ochronę majątku — znajdę rozwiązanie idealne dla Twojej sytuacji.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="service in business.services" :key="service.id">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="icon-glass w-12 h-12">
                  <Icon :name="service.icon" class="w-6 h-6 text-brand" />
                </div>
                <h3 class="font-semibold text-ink">{{ service.name }}</h3>
              </div>
            </template>
            <p class="text-sm text-ink-muted leading-relaxed">
              {{ service.description }}
            </p>
            <template #footer>
              <NuxtLink
                :to="`/uslugi#${service.id}`"
                class="text-sm font-medium text-brand-text hover:underline transition-all duration-300 flex items-center gap-1"
              >
                Dowiedz się więcej
                <Icon name="lucide:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </template>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Feature: About Expert -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="brand" class="mb-4">Ekspert</Badge>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-6">
              Mirosława Poniatowska
            </h2>
            <p class="text-lg text-ink-muted leading-relaxed mb-6">
              Jako specjalista w ochronie życia i zdrowia, nie oferuję gotowych produktów, lecz rozwiązania szyte
              na miarę Twojej sytuacji życiowej. Przeprowadzam rzetelną analizę potrzeb, porównuję oferty i wybieram
              to, co naprawdę Cię zabezpieczy.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3 text-ink-muted">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-brand mt-0.5 shrink-0" />
                <span>Wąska specjalizacja w ubezpieczeniach życiowych i zdrowotnych</span>
              </li>
              <li class="flex items-start gap-3 text-ink-muted">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-brand mt-0.5 shrink-0" />
                <span>Indywidualna analiza potrzeb ubezpieczeniowych (APK)</span>
              </li>
              <li class="flex items-start gap-3 text-ink-muted">
                <Icon name="lucide:check-circle" class="w-5 h-5 text-brand mt-0.5 shrink-0" />
                <span>Wsparcie przy zgłaszaniu roszczeń i likwidacji szkód</span>
              </li>
            </ul>
            <Button to="/o-mnie" variant="outline" size="lg">
              Poznaj mnie bliżej
              <Icon name="lucide:arrow-right" class="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <NuxtImg
                src="/images/poznajmy-sie.png"
                alt="Mirosława Poniatowska — ekspert ubezpieczeniowy Miralive"
                width="500"
                height="360"
                class="rounded-2xl shadow-xl object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Trust Signals -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="signal in business.trustSignals"
            :key="signal.label"
            class="text-center"
          >
            <p class="text-4xl md:text-5xl font-extrabold text-brand-text mb-2">
              {{ signal.value }}
            </p>
            <p class="text-sm text-ink-muted font-medium uppercase tracking-wider">
              {{ signal.label }}
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Contact CTA -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <Card :hover="false" class="max-w-2xl mx-auto text-center">
          <div class="py-4">
            <div class="icon-glass w-16 h-16 mx-auto mb-6">
              <Icon name="lucide:phone-call" class="w-8 h-8 text-brand" />
            </div>
            <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-4">
              Porozmawiajmy o Twoim ubezpieczeniu
            </h2>
            <p class="text-ink-muted mb-8 max-w-md mx-auto">
              Bezpłatna konsultacja. Porównam oferty i znajdę najlepszą ochronę
              dopasowaną do Twoich potrzeb i budżetu.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button :href="`tel:${business.contact.phone[0].replace(/\\s/g, '')}`" size="lg" class="pulse-brand">
                <Icon name="lucide:phone" class="w-5 h-5 mr-2" />
                {{ business.contact.phone[0] }}
              </Button>
              <Button to="/kontakt#formularz" variant="outline" size="lg">
                <Icon name="lucide:message-square" class="w-5 h-5 mr-2" />
                Zostaw kontakt
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  </div>
</template>
