<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: `Usługi ubezpieczeniowe — ${business.name}`,
  description: 'Pełna oferta ubezpieczeń: życiowe, zdrowotne, komunikacyjne, firmowe, majątkowe i OC zawodów medycznych. Porównanie ofert od 20+ towarzystw.',
  ogTitle: `Usługi ubezpieczeniowe — ${business.name}`,
  ogDescription: 'Pełna oferta ubezpieczeń: życiowe, zdrowotne, komunikacyjne, firmowe, majątkowe i OC zawodów medycznych.',
})

const serviceDetails: Record<string, { features: string[]; cta: string }> = {
  'ubezpieczenia-zyciowe': {
    features: [
      'Ochrona dochodu i rodziny na wypadek śmierci lub niezdolności do pracy',
      'Wypłata środków natychmiast po diagnozie poważnego zachorowania',
      'Druga opinia medyczna u najlepszych specjalistów',
      'Plany posagowe i oszczędnościowe dla dzieci',
      'Polisy under kredyt hipoteczny — realna ochrona, nie tylko wymóg banku',
    ],
    cta: 'To moja główna specjalizacja. Przeprowadzę pełną analizę potrzeb Twojej rodziny.',
  },
  'ubezpieczenia-komunikacyjne': {
    features: [
      'Obowiązkowe OC — najlepsza cena z porównania wielu ofert',
      'AC (Autocasco) — ochrona od kradzieży, zniszczenia i zdarzeń losowych',
      'Assistance — pomoc na drodze w kraju i za granicą',
      'NNW Kierowcy i Pasażerów',
      'Ubezpieczenie szyb i opon bez utraty zniżek',
      'Ochrona zniżek po pierwszej stłuczce',
    ],
    cta: 'Porównam ceny od kilkunastu towarzystw w jednym miejscu.',
  },
  'ubezpieczenia-firmowe': {
    features: [
      'OC Zawodowe (deliktowe i kontraktowe)',
      'Ubezpieczenie mienia firmy od ognia, kradzieży i wandalizmu',
      'Grupowe ubezpieczenia na życie — atrakcyjny benefit dla pracowników',
      'Ubezpieczenie floty pojazdów ze specjalnymi warunkami',
      'Gwarancje ubezpieczeniowe do przetargów',
    ],
    cta: 'Kompleksowa ochrona Twojej firmy, niezależnie od branży i skali.',
  },
  'oc-medyczne': {
    features: [
      'OC Lekarza — ochrona w ramach prywatnej praktyki i kontraktu',
      'OC Pielęgniarki i Położnej',
      'OC Ratownika Medycznego',
      'OC Fizjoterapeuty',
      'Ochrona przed roszczeniami pacjentów i ich rodzin',
    ],
    cta: 'Specjalistyczne polisy dopasowane do Twojej specjalizacji medycznej.',
  },
  'ubezpieczenia-majatkowe': {
    features: [
      'Ubezpieczenie domu i mieszkania od ognia i zdarzeń losowych',
      'Ochrona od kradzieży z włamaniem i wandalizmu',
      'Ubezpieczenie domków letniskowych',
      'Ubezpieczenie odpowiedzialności cywilnej w życiu prywatnym',
      'Assistance domowy — hydraulik, ślusarz, elektryk',
    ],
    cta: 'Zabezpiecz swój dom i majątek przed nieprzewidzianymi zdarzeniami.',
  },
  'ubezpieczenia-szkolne': {
    features: [
      'NNW szkolne dla dzieci i młodzieży',
      'Ubezpieczenia turystyczne na wakacje i podróże',
      'Polisy na podróże służbowe',
      'Koszty leczenia i transport medyczny za granicą',
      'Ubezpieczenie bagażu i sprzętu sportowego',
    ],
    cta: 'Ochrona Twoich dzieci w szkole i podczas wakacji.',
  },
}
</script>

<template>
  <div>
    <!-- Header -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <Badge color="brand" class="mb-4">Oferta</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4">
            Usługi ubezpieczeniowe
          </h1>
          <p class="text-lg text-ink-muted leading-relaxed">
            Oferuję pełen zakres ubezpieczeń dla osób prywatnych, firm i zawodów medycznych.
            Porównuję oferty od {{ business.partners.length }}+ towarzystw, aby znaleźć najlepszą cenę i zakres.
          </p>
        </div>
      </Container>
    </section>

    <!-- Service Details -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="space-y-16">
          <div
            v-for="(service, index) in business.services"
            :key="service.id"
            :id="service.id"
            class="scroll-mt-24"
          >
            <div
              class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
            >
              <!-- Icon & Title -->
              <div class="lg:col-span-4">
                <div class="icon-glass w-16 h-16 mb-4">
                  <Icon :name="service.icon" class="w-8 h-8 text-brand" />
                </div>
                <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-3">
                  {{ service.name }}
                </h2>
                <p class="text-ink-muted leading-relaxed">
                  {{ service.description }}
                </p>
              </div>

              <!-- Features -->
              <div class="lg:col-span-5">
                <ul v-if="serviceDetails[service.id]" class="space-y-3">
                  <li
                    v-for="feature in serviceDetails[service.id].features"
                    :key="feature"
                    class="flex items-start gap-3"
                  >
                    <Icon name="lucide:check-circle" class="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span class="text-ink-muted">{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- CTA -->
              <div class="lg:col-span-3">
                <Card :hover="false" class="bg-page-alt">
                  <p class="text-sm text-ink-muted mb-4">
                    {{ serviceDetails[service.id]?.cta }}
                  </p>
                  <Button to="/kontakt" size="md" class="w-full justify-center">
                    <Icon name="lucide:phone" class="w-4 h-4 mr-2" />
                    Zapytaj o ofertę
                  </Button>
                </Card>
              </div>
            </div>

            <div
              v-if="index < business.services.length - 1"
              class="border-t border-card-border mt-16"
            />
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-4">
            Nie wiesz, które ubezpieczenie wybrać?
          </h2>
          <p class="text-ink-muted mb-8">
            Zadzwoń lub napisz — przeprowadzę bezpłatną analizę potrzeb i dobiorę optymalną ochronę.
          </p>
          <Button to="/kontakt#formularz" size="lg" class="pulse-brand">
            <Icon name="lucide:phone" class="w-5 h-5 mr-2" />
            Umów bezpłatną konsultację
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>
