<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: `Usługi ubezpieczeniowe — ${business.name}`,
  description: 'Pełna oferta ubezpieczeń: życiowe, zdrowotne, komunikacyjne, firmowe, majątkowe i OC zawodów medycznych. Porównanie ofert od 20+ towarzystw.',
  ogTitle: `Usługi ubezpieczeniowe — ${business.name}`,
  ogDescription: 'Pełna oferta ubezpieczeń: życiowe, zdrowotne, komunikacyjne, firmowe, majątkowe i OC zawodów medycznych.',
})

const nnwBenefits = [
  { title: 'Wypłata za trwały uszczerbek na zdrowiu', desc: 'Otrzymasz procent sumy ubezpieczenia za każdy uraz (złamania, zwichnięcia, rany).' },
  { title: 'Wsparcie w rehabilitacji', desc: 'Zwrot kosztów zabiegów fizjoterapeutycznych, masaży oraz wypożyczenia sprzętu medycznego (kule, stabilizatory).' },
  { title: 'Pokrycie kosztów leczenia', desc: 'Finansowanie wizyt u specjalistów, badań (RTG, rezonans) oraz zakupu leków.' },
  { title: 'Zasiłek dzienny', desc: 'Rekompensata za czas niezdolności do pracy lub nauki po wypadku.' },
  { title: 'Pomoc Assistance', desc: 'Transport medyczny, opieka domowa po hospitalizacji oraz pomoc psychologiczna.' },
]

const nnwTargets = [
  { title: 'Dla dorosłych', desc: 'Ochrona w życiu prywatnym, podczas prac domowych, podróży czy uprawiania hobby.', icon: 'lucide:user' },
  { title: 'Dla dzieci i młodzieży (NNW Szkolne)', desc: 'Kompleksowa ochrona 24/7 — w szkole, na wycieczkach i podczas zajęć sportowych (często szerszy zakres niż standardowe polisy grupowe).', icon: 'lucide:graduation-cap' },
  { title: 'Dla sportowców', desc: 'Specjalistyczne pakiety dla osób trenujących rekreacyjnie i zawodowo.', icon: 'lucide:dumbbell' },
]

const corporateHealthReasons = [
  { title: 'Szybszy powrót do pracy', desc: 'Krótkie terminy oczekiwania na wizyty u specjalistów (nawet w 24–48h) skracają czas trwania zwolnień lekarskich.' },
  { title: 'Wzrost atrakcyjności oferty pracy', desc: 'Firma oferująca prywatną opiekę medyczną jest postrzegana jako nowoczesna i godna zaufania.' },
  { title: 'Budowanie lojalności', desc: 'Pracownicy doceniają realną dbałość o ich zdrowie i bliskich (możliwość dopisania rodziny do pakietu).' },
  { title: 'Profilaktyka', desc: 'Regularne badania i dostęp do diagnostyki pozwalają uniknąć długotrwałych absencji w zespole.' },
  { title: 'Korzyści podatkowe', desc: 'Koszt ubezpieczenia zdrowotnego pracowników może być zaliczony do kosztów uzyskania przychodu firmy.' },
]

const corporateMedicalCoverage = [
  'Nielimitowany dostęp do lekarzy specjalistów (bez skierowań)',
  'Szeroki zakres badań diagnostycznych (laboratorium, RTG, USG, rezonans, tomografia)',
  'Telemedycyna: szybkie konsultacje online i e-recepty bez wychodzenia z domu',
  'Zabiegi ambulatoryjne i rehabilitacja',
  'Przeglądy zdrowia i szczepienia ochronne',
]

const serviceDetails: Record<string, {
  features: string[]
  cta: string
  healthBenefits?: { title: string; desc: string }[]
  quote?: string
}> = {
  'ubezpieczenia-zyciowe': {
    features: [
      'Ochrona dochodu i rodziny na wypadek śmierci lub niezdolności do pracy',
      'Wypłata środków natychmiast po diagnozie poważnego zachorowania',
      'Druga opinia medyczna u najlepszych specjalistów',
      'Plany posagowe i oszczędnościowe dla dzieci',
      'Polisa pod kredyt hipoteczny — realna ochrona, nie tylko wymóg banku',
    ],
    cta: 'To moja główna specjalizacja. Przeprowadzę pełną analizę potrzeb Twojej rodziny.',
    healthBenefits: [
      { title: 'Szybka diagnoza', desc: 'Wizyty u lekarzy specjalistów (kardiolog, neurolog, okulista) w ciągu kilku dni.' },
      { title: 'Badania bez dopłat', desc: 'Szeroki zakres badań laboratoryjnych i obrazowych (RTG, USG, Rezonans).' },
      { title: 'Komfort', desc: 'Prywatne placówki medyczne w całej Polsce i opieka medyczna.' },
    ],
    quote: 'Nie odkładaj bezpieczeństwa na jutro. Porozmawiajmy o polisie, która najlepiej ochroni Ciebie i Twoją rodzinę.',
  },
  'ubezpieczenia-komunikacyjne': {
    features: [
      'Obowiązkowe OC — najlepsza cena z porównania wielu ofert',
      'AC (Autocasco) — ochrona od kradzieży, zniszczenia i zdarzeń losowych',
      'Assistance — pomoc na drodze w kraju i za granicą',
      'NNW Kierowcy i Pasażerów',
      'Ubezpieczenie szyb i opon bez utraty zniżek',
      'Ochrona zniżek OC, AC',
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color="brand" class="mb-4">Oferta</Badge>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4">
              Usługi ubezpieczeniowe
            </h1>
            <p class="text-lg text-ink-muted leading-relaxed">
              Oferuję pełen zakres ubezpieczeń dla osób prywatnych, firm i zawodów medycznych.
              Porównuję oferty od {{ business.partners.length }}+ towarzystw, aby znaleźć najlepszą cenę i zakres.
            </p>
          </div>
          <div class="flex justify-center lg:justify-end">
            <NuxtImg
              src="/images/uslugi.png"
              alt="Mirosława Poniatowska z klientami — usługi ubezpieczeniowe Miralive"
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
                <div class="flex items-center gap-4 mb-3">
                  <div class="icon-glass w-14 h-14 shrink-0">
                    <Icon :name="service.icon" class="w-7 h-7 text-brand" />
                  </div>
                  <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
                    {{ service.name }}
                  </h2>
                </div>
                <p class="text-ink-muted leading-relaxed">
                  {{ service.description }}
                </p>
              </div>

              <!-- Features -->
              <div class="lg:col-span-8">
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
                <!-- Health benefits sub-section (Kluczowe korzyści) -->
                <div v-if="serviceDetails[service.id]?.healthBenefits" class="mt-6 p-4 bg-page-alt rounded-xl border border-card-border">
                  <p class="text-sm font-semibold text-brand-text mb-3">Kluczowe korzyści:</p>
                  <ul class="space-y-2">
                    <li
                      v-for="benefit in serviceDetails[service.id]!.healthBenefits"
                      :key="benefit.title"
                      class="text-sm"
                    >
                      <span class="font-medium text-ink">{{ benefit.title }}:</span>
                      <span class="text-ink-muted"> {{ benefit.desc }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Quote CTA — life & health insurance -->
            <div
              v-if="serviceDetails[service.id]?.quote"
              class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 bg-page-alt rounded-2xl border-l-4 border-brand"
            >
              <p class="text-base md:text-lg font-medium text-ink italic">
                „{{ serviceDetails[service.id]!.quote }}"
              </p>
              <Button to="/kontakt#formularz" size="sm" class="shrink-0">
                <Icon name="lucide:phone" class="w-4 h-4 mr-2" />
                Porozmawiajmy
              </Button>
            </div>

            <!-- NNW extended section -->
            <template v-if="service.id === 'ubezpieczenia-zyciowe'">
              <div id="nnw" class="mt-12 pt-10 border-t border-card-border scroll-mt-24">
                <div class="mb-6">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="icon-glass w-12 h-12">
                      <Icon name="lucide:shield-alert" class="w-6 h-6 text-brand" />
                    </div>
                    <h3 class="text-xl md:text-2xl font-extrabold tracking-tight text-ink">
                      Następstwa Nieszczęśliwych Wypadków (NNW) — Twoje wsparcie po wypadku
                    </h3>
                  </div>
                  <p class="text-ink-muted leading-relaxed max-w-3xl">
                    Wypadku nie da się przewidzieć, ale można zminimalizować jego skutki finansowe.
                    Ubezpieczenie NNW to gwarancja wypłaty świadczenia, które pomoże Ci wrócić do zdrowia i sprawności po nagłym zdarzeniu.
                  </p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 class="font-semibold text-ink mb-4">Co zyskujesz dzięki polisie NNW?</h4>
                    <ul class="space-y-4">
                      <li v-for="b in nnwBenefits" :key="b.title" class="flex items-start gap-3">
                        <Icon name="lucide:check-circle" class="w-5 h-5 text-brand mt-0.5 shrink-0" />
                        <div>
                          <span class="font-medium text-ink text-sm">{{ b.title }}: </span>
                          <span class="text-ink-muted text-sm">{{ b.desc }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-ink mb-4">Dla kogo przygotowaliśmy ofertę?</h4>
                    <div class="space-y-3">
                      <Card v-for="t in nnwTargets" :key="t.title" :hover="false" class="bg-page-alt">
                        <div class="flex items-start gap-3">
                          <Icon :name="t.icon" class="w-5 h-5 text-brand mt-0.5 shrink-0" />
                          <div>
                            <p class="font-medium text-ink text-sm">{{ t.title }}</p>
                            <p class="text-xs text-ink-muted mt-1">{{ t.desc }}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div class="mt-4 p-4 bg-page-alt rounded-xl border border-card-border">
                      <p class="text-sm text-ink-muted">
                        <span class="font-semibold text-brand-text">Ważne:</span>
                        W naszej multiagencji dopasujemy sumę ubezpieczenia tak, aby realnie pokryła koszty leczenia — nie tylko była symbolicznym zapisem na papierze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- Corporate health benefit section -->
            <template v-if="service.id === 'ubezpieczenia-zyciowe'">
              <div id="opieka-medyczna" class="mt-12 pt-10 border-t border-card-border scroll-mt-24">
                <div class="mb-6">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="icon-glass w-12 h-12">
                      <Icon name="lucide:activity" class="w-6 h-6 text-brand" />
                    </div>
                    <h3 class="text-xl md:text-2xl font-extrabold tracking-tight text-ink">
                      Prywatna Opieka Medyczna — Benefit, który buduje lojalny zespół
                    </h3>
                  </div>
                  <p class="text-ink-muted leading-relaxed max-w-3xl">
                    W dobie rynku pracownika kompleksowy pakiet zdrowotny to już nie luksus, a standard dbającego o zespół przedsiębiorcy.
                    Inwestując w zdrowie pracowników, inwestujesz w stabilność i efektywność swojej firmy.
                  </p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 class="font-semibold text-ink mb-4">Dlaczego warto wdrożyć pakiet zdrowotny?</h4>
                    <ul class="space-y-3">
                      <li v-for="r in corporateHealthReasons" :key="r.title" class="flex items-start gap-3">
                        <Icon name="lucide:check-circle" class="w-5 h-5 text-brand mt-0.5 shrink-0" />
                        <div>
                          <span class="font-medium text-ink text-sm">{{ r.title }}: </span>
                          <span class="text-ink-muted text-sm">{{ r.desc }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-ink mb-4">Co obejmuje nowoczesny pakiet medyczny?</h4>
                    <ul class="space-y-2 mb-4">
                      <li v-for="item in corporateMedicalCoverage" :key="item" class="flex items-start gap-3">
                        <Icon name="lucide:check" class="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span class="text-ink-muted text-sm">{{ item }}</span>
                      </li>
                    </ul>
                    <div class="p-4 bg-page-alt rounded-xl border border-card-border">
                      <p class="text-sm font-semibold text-brand-text mb-1">Porównujemy oferty w jednym miejscu</p>
                      <p class="text-sm text-ink-muted">
                        Wybierając ubezpieczenie grupowe przez naszą multiagencję, porównujemy oferty od największych dostawców
                        (Lux Med, Medicover, PZU Zdrowie) — dopasowane do budżetu i branży. Przygotowujemy oferty już dla firm od 2–3 osób.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>

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
