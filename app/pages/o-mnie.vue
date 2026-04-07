<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: `O mnie — ${business.name}`,
  description: 'Mirosława Poniatowska — ekspert ubezpieczeń życiowych i zdrowotnych. Poznaj moją historię, specjalizację i podejście do doradztwa ubezpieczeniowego.',
  ogTitle: `O mnie — ${business.name}`,
  ogDescription: 'Mirosława Poniatowska — ekspert ubezpieczeń życiowych i zdrowotnych z wieloletnim doświadczeniem.',
})
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="brand" class="mb-4">O mnie</Badge>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-6">
              Mirosława Poniatowska
            </h1>
            <p class="text-xl text-ink-muted leading-relaxed">
              Ekspert ubezpieczeń życiowych i zdrowotnych — {{ new Date().getFullYear() - business.foundedYear }}+ lat
              doświadczenia w ubezpieczeniach i 30+ lat w branży finansowej.
              Prowadzę Multiagencję {{ business.legalName }} we {{ business.address.city }}.
            </p>
          </div>
          <div class="flex justify-center">
            <NuxtImg
              src="/images/poznajmy-sie.png"
              alt="Mirosława Poniatowska — ekspert ubezpieczeniowy Miralive"
              width="480"
              height="340"
              class="rounded-2xl shadow-xl object-cover"
              loading="eager"
              format="webp"
            />
          </div>
        </div>
      </Container>
    </section>

    <!-- Misja -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-6">
            Moja misja
          </h2>
          <div class="prose prose-lg text-ink-muted max-w-none">
            <p>
              Wierzę, że ubezpieczenie to nie produkt — to obietnica bezpieczeństwa dla Ciebie i Twoich bliskich.
              Dlatego nie sprzedaję gotowych polis. Zamiast tego przeprowadzam rzetelną analizę potrzeb,
              porównuję oferty od kilkunastu towarzystw i wybieram to, co naprawdę Cię zabezpieczy.
            </p>
            <p>
              Moja specjalizacja to ubezpieczenia życiowe i zdrowotne — obszar, w którym detale Ogólnych
              Warunków Ubezpieczenia (OWU) decydują o tym, czy w trudnym momencie otrzymasz realne wsparcie
              finansowe, czy jedynie papierową obietnicę. Jako ekspert potrafię przeanalizować te szczegóły
              i wskazać różnice w zakresie ochrony, o których inni agenci nie mówią.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Wartości -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
            Dlaczego warto mi zaufać?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <template #header>
              <div class="icon-glass w-12 h-12 mb-2">
                <Icon name="lucide:target" class="w-6 h-6 text-brand" />
              </div>
              <h3 class="font-semibold text-ink">Wąska specjalizacja</h3>
            </template>
            <p class="text-sm text-ink-muted leading-relaxed">
              Skupienie na ubezpieczeniach życiowych i zdrowotnych pozwala mi znać każdy produkt na rynku
              na wylot — od warunków wypłaty po wyłączenia odpowiedzialności.
            </p>
          </Card>

          <Card>
            <template #header>
              <div class="icon-glass w-12 h-12 mb-2">
                <Icon name="lucide:clipboard-check" class="w-6 h-6 text-brand" />
              </div>
              <h3 class="font-semibold text-ink">Analiza potrzeb (APK)</h3>
            </template>
            <p class="text-sm text-ink-muted leading-relaxed">
              Zanim zaproponuję polisę, przeprowadzam dokładny wywiad, by zrozumieć Twoją sytuację
              życiową, zawodową i finansową. Dopiero wtedy dobieram ochronę.
            </p>
          </Card>

          <Card>
            <template #header>
              <div class="icon-glass w-12 h-12 mb-2">
                <Icon name="lucide:handshake" class="w-6 h-6 text-brand" />
              </div>
              <h3 class="font-semibold text-ink">Wsparcie posprzedażowe</h3>
            </template>
            <p class="text-sm text-ink-muted leading-relaxed">
              Moja rola nie kończy się na podpisaniu umowy. Pomagam przy zgłaszaniu roszczeń,
              wypowiedzeniu starej polisy i dbam o to, by wypłata świadczenia nastąpiła jak najszybciej.
            </p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Quote -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <Icon name="lucide:quote" class="w-12 h-12 text-brand/20 mx-auto mb-6" />
          <blockquote class="text-xl md:text-2xl font-medium text-ink leading-relaxed italic mb-6">
            „Ubezpieczenie to jedyna rzecz, którą musisz kupić wtedy, gdy wydaje Ci się, że go nie potrzebujesz
            — bo gdy stanie się potrzebne, nie będziesz już mógł go kupić."
          </blockquote>
          <div class="flex items-center justify-center gap-3">
            <div class="w-12 h-12 rounded-full overflow-hidden">
              <NuxtImg
                src="/images/hero.png"
                alt="Mirosława Poniatowska"
                width="48"
                height="48"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
            <div class="text-left">
              <p class="text-sm font-semibold text-ink">Mirosława Poniatowska</p>
              <p class="text-xs text-ink-muted">Ekspert ubezpieczeniowy, {{ business.name }}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-4">
            Chcesz porozmawiać o swoim ubezpieczeniu?
          </h2>
          <p class="text-ink-muted mb-8">
            Skontaktuj się ze mną — przeprowadzę bezpłatną analizę potrzeb i pomogę wybrać najlepszą ochronę.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/kontakt#formularz" size="lg" class="pulse-brand">
              <Icon name="lucide:phone" class="w-5 h-5 mr-2" />
              Umów konsultację
            </Button>
            <Button to="/kontakt#formularz" variant="outline" size="lg">
              <Icon name="lucide:message-square" class="w-5 h-5 mr-2" />
              Zostaw kontakt
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
