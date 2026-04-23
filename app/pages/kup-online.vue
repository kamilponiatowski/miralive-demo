<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: `Kup ubezpieczenie online — ${business.name}`,
  description: 'Kup polisę samodzielnie z rabatem i opieką doświadczonego agenta. NNW szkolne, OC drona, ochrona dochodu i polisy turystyczne online.',
  ogTitle: `Kup ubezpieczenie online — ${business.name}`,
  ogDescription: 'Kup polisę samodzielnie z rabatem i opieką doświadczonego agenta. Compensa, Generali, Uniqa, Leadenhall.',
})

/* ── Offer data ── */

interface Offer {
  id: string
  name: string
  insurer: string
  description: string
  icon: string
  category: Category
  url: string
  discountCode?: string
  discountLabel?: string
  badge?: string
  features: string[]
  ctaLabel?: string
}

type Category = 'rodzina' | 'drony' | 'biznes' | 'podroznik' | 'szkolne'

const categories = [
  { id: 'all' as const, label: 'Wszystkie', icon: 'lucide:layout-grid' },
  { id: 'rodzina' as Category, label: 'Dla Rodziny', icon: 'lucide:heart' },
  { id: 'biznes' as Category, label: 'Dla Specjalisty', icon: 'lucide:briefcase' },
  { id: 'podroznik' as Category, label: 'Dla Podróżnika', icon: 'lucide:plane' },
  { id: 'szkolne' as Category, label: 'Szkolne', icon: 'lucide:book-open' },
  { id: 'drony' as Category, label: 'Drony', icon: 'lucide:radio' },
]

const activeCategory = ref<'all' | Category>('all')

const offers: Offer[] = [
  /* ── Generali (eshop — portal agenta) ── */
  {
    id: 'generali-eshop',
    name: 'Sklep Generali',
    insurer: 'Generali',
    description: 'Oficjalny portal agenta Generali — kup online ubezpieczenie komunikacyjne, życiowe, domowe, podróżne, NNW i więcej. Link automatycznie przypisuje polisę do mnie jako Twojego agenta.',
    icon: 'lucide:shield',
    category: 'rodzina',
    url: 'https://eshop.generali.pl/partner/1721091',
    badge: 'Pełna oferta',
    features: [
      'Życie i zdrowie — ochrona dla całej rodziny',
      'OC/AC samochodu i pomoc drogowa',
      'Ubezpieczenie domu i mieszkania',
      'Podróże i koszty rezygnacji z wyjazdu',
      'NNW indywidualne i szkolne',
    ],
    ctaLabel: 'Otwórz sklep Generali',
  },
  /* ── Compensa / Beesafe (kod rabatowy 109028) ── */
  /* ── Generali (bezpieczny.pl) ── */
  {
    id: 'generali-pakiety',
    name: 'Pakiety Generali',
    insurer: 'Generali (bezpieczny.pl)',
    description: 'Ubezpieczenia NNW, szkolne, sportowe i zdrowotne od Generali. Wybierz pakiet w kalkulatorze — polisa zostanie automatycznie przypisana do mnie jako Twojego agenta.',
    icon: 'lucide:heart-pulse',
    category: 'rodzina',
    url: 'https://bezpieczny.pl/25204',
    badge: 'Kalkulator online',
    features: [
      'NNW szkolne i przedszkolne',
      'NNW sportowe',
      'Ubezpieczenia zdrowotne',
      'Atrybucja agenta automatyczna',
    ],
    discountCode: '25204',
    discountLabel: '10% rabatu z kodem',
    ctaLabel: 'Otwórz kalkulator',
  },
    /* ── Bezpieczny.pl podróżnik ── */
    {
      id: 'bezpieczny-podroznik',
      name: 'Ubezpieczenia Podróżne',
      insurer: 'Generali (bezpieczny.pl)',
      description: 'Kompleksowe ubezpieczenie podróżne dla osób wyjeżdżających za granicę i aktywnych podróżników. Szeroki zakres ochrony, szybki zakup online i 10% rabatu z kodem 25204.',
      icon: 'lucide:globe',
      category: 'podroznik',
      url: 'https://bezpieczny.pl/ubezpieczenia-podrozne/25204',
      badge: 'Rabat 10%',
      features: [
        'Koszty leczenia za granicą',
        'Ochrona bagażu i sprzętu sportowego',
        'OC w życiu prywatnym',
        'Dodatkowe opcje dla aktywnych',
        'Szybki zakup online',
      ],
      discountCode: '25204',
      discountLabel: '10% rabatu z kodem',
      ctaLabel: 'Kup z rabatem',
    },
  /* ── Compensa / Beesafe (kod rabatowy 109028) ── */
  // {
  //   id: 'nnw-szkolne-beesafe',
  //   name: 'NNW Szkolne',
  //   insurer: 'Beesafe (Compensa)',
  //   description: 'Ubezpieczenie NNW dla dzieci i młodzieży. Ochrona w szkole, na wycieczkach i zajęciach pozalekcyjnych — 24/7, z 10% rabatem.',
  //   icon: 'lucide:graduation-cap',
  //   category: 'szkolne',
  //   url: 'https://beesafe.pl/ubezpieczenia-dodatkowe/ubezpieczenie-szkolne/kalkulator/?discount_code=109028',
  //   discountCode: '109028',
  //   discountLabel: '10% rabatu z kodem',
  //   badge: 'Rabat 10%',
  //   features: [
  //     'Ochrona 24/7 — w szkole i poza nią',
  //     'Pokrycie kosztów leczenia i rehabilitacji',
  //     'Wypłata za trwały uszczerbek na zdrowiu',
  //     'Assistance — pomoc po wypadku',
  //   ],
  //   ctaLabel: 'Oblicz składkę',
  // },
  // Nowa oferta InterRisk
  {
    id: 'nnw-szkolne-interrisk',
    name: 'NNW Szkolne Edu Plus',
    insurer: 'InterRisk',
    description: 'Ubezpieczenie NNW dla dzieci, młodzieży i studentów. Kompleksowa ochrona w placówce oświatowej, na wycieczkach i w czasie wolnym — 24/7.',
    icon: 'lucide:graduation-cap',
    category: 'szkolne',
    url: 'https://klient.interrisk.pl/EduPlusOfertaIndywidualna?agent=SEVONDUy',
    features: [
      'Ochrona 24/7 — w szkole i poza nią',
      'Wyczynowe uprawianie sportów w cenie',
      'Pokrycie kosztów leczenia i rehabilitacji',
      'Szybki zakup online',
    ],
    ctaLabel: 'Sprawdź ofertę',
  },
  /* ── Leadenhall ── */
  {
    id: 'ochrona-dochodu',
    name: 'Ochrona Dochodu',
    insurer: 'Leadenhall',
    description: 'Nie ryzykuj — chroń swoje dochody, nawet podczas choroby lub wypadku. Nawet do 80% miesięcznych przychodów przez maksymalnie 24 miesiące.',
    icon: 'lucide:shield-check',
    category: 'biznes',
    url: 'https://utratadochodu.leadenhall.com/info?employeeCode=E6BQ3yffdP',
    badge: 'Dla specjalistów',
    features: [
      'Ochrona dochodu do 80% przychodu brutto',
      'Świadczenie nawet przez 24 miesiące',
      'Idealne dla specjalistów IT, freelancerów i B2B',
      'Prosty formularz — bez dokumentacji medycznej',
    ],
    ctaLabel: 'Sprawdź ofertę',
  },
  /* ── UNIQA ── */
  {
    id: 'turystyczne',
    name: 'Ubezpieczenie Podróżne',
    insurer: 'UNIQA',
    description: 'Polisa podróżna w 3 minuty. Koszty leczenia, transport medyczny, bagaż i OC — na podróże prywatne i służbowe.',
    icon: 'lucide:plane',
    category: 'podroznik',
    url: 'https://www.uniqa.pl/kalkulator/ubezpieczenie-podrozne/destinations?agent=NjU1Nzk5ODc6MTM2Mjc0NzE4Ng==',
    features: [
      'Koszty leczenia i transport medyczny',
      'Ubezpieczenie bagażu i sprzętu',
      'OC w życiu prywatnym za granicą',
      'Polisa na e-mail natychmiast po opłaceniu',
    ],
    ctaLabel: 'Kup polisę online',
  },
  {
    id: 'rezygnacja-z-podrozy',
    name: 'Rezygnacja z Podróży',
    insurer: 'UNIQA',
    description: 'Ubezpieczenie kosztów rezygnacji z podróży. Choroba, wypadek lub inne zdarzenie losowe — odzyskaj pieniądze za niezrealizowany wyjazd.',
    icon: 'lucide:plane-landing',
    category: 'podroznik',
    url: 'https://www.uniqa.pl/kalkulator/rezygnacjazpodrozy/variants?agent=NjU1Nzk5ODc6MTM2Mjc0NzE4Ng%3D%3D',
    features: [
      'Zwrot kosztów odwołanej podróży',
      'Ochrona przy nagłej chorobie lub wypadku',
      'Pokrycie kosztów wcześniejszego powrotu',
      'Szybka wypłata odszkodowania',
    ],
    ctaLabel: 'Sprawdź warianty',
  },
  /* ── Drony (Compensa) ── */
  {
    id: 'oc-pilota-drona',
    name: 'OC Pilota Drona',
    insurer: 'Compensa',
    description: 'Obowiązkowe ubezpieczenie OC dla pilotów dronów — rekreacyjnych i hobbystycznych. Szybki zakup online z 10% rabatem.',
    icon: 'lucide:radio',
    category: 'drony',
    url: 'https://www.compensa.pl/ubezpieczenia-dodatkowe/oc-pilota-drona/kalkulator/?discount_code=109028',
    discountCode: '109028',
    discountLabel: '10% rabatu z kodem',
    badge: 'Rabat 10%',
    features: [
      'OC obowiązkowe do lotów dronem',
      'Ochrona od szkód wyrządzonych osobom trzecim',
      'Polisa w kilka minut — online',
      'Uznawane przez ULC',
    ],
    ctaLabel: 'Oblicz składkę',
  },
  {
    id: 'oc-operatora-drona',
    name: 'OC Operatora Drona',
    insurer: 'Compensa',
    description: 'Ubezpieczenie OC dla komercyjnych operatorów dronów — filmowanie, inspekcje, fotogrametria i inne usługi profesjonalne.',
    icon: 'lucide:radio',
    category: 'drony',
    url: 'https://www.compensa.pl/ubezpieczenia-dodatkowe/oc-operatora-drona/kalkulator/?discount_code=109028',
    discountCode: '109028',
    discountLabel: '10% rabatu z kodem',
    badge: 'Rabat 10%',
    features: [
      'OC dla działalności komercyjnej z dronem',
      'Ochrona przy zleceniach filmowych i inspekcjach',
      'Wyższe sumy gwarancyjne niż OC pilota',
      'Szybki proces — polisa online',
    ],
    ctaLabel: 'Oblicz składkę',
  },
]

const filteredOffers = computed(() =>
  activeCategory.value === 'all'
    ? offers
    : offers.filter(o => o.category === activeCategory.value),
)

/* ── Click-to-Copy ── */

const copiedId = ref<string | null>(null)
let copyTimeout: ReturnType<typeof setTimeout> | null = null

async function copyCode(offerId: string, code: string) {
  try {
    await navigator.clipboard.writeText(code)
  }
  catch {
    const el = document.createElement('textarea')
    el.value = code
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
  copiedId.value = offerId
  if (copyTimeout) clearTimeout(copyTimeout)
  copyTimeout = setTimeout(() => { copiedId.value = null }, 2500)
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="max-w-3xl">
          <Badge color="brand" class="mb-4">Kup online</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4">
            Kup ubezpieczenie <span class="text-brand-text">samodzielnie</span>
          </h1>
          <p class="text-lg text-ink-muted leading-relaxed mb-6">
            Wybierz produkt, oblicz składkę i kup polisę online — bez wychodzenia z domu.
            Każda polisa kupiona przez tę stronę jest <strong class="text-ink">przypisana do mnie</strong> jako Twojego agenta,
            więc w razie pytań lub szkody — jestem do dyspozycji.
          </p>
          <div class="flex flex-wrap items-center gap-4 text-sm text-ink-muted">
            <span class="flex items-center gap-2">
              <Icon name="lucide:shield-check" class="w-4 h-4 text-brand" />
              Pełna obsługa posprzedażowa
            </span>
            <span class="flex items-center gap-2">
              <Icon name="lucide:phone" class="w-4 h-4 text-brand" />
              Pomoc: {{ business.contact.phone[0] }}
            </span>
          </div>
        </div>
      </Container>
    </section>

    <!-- Category filter -->
    <section class="py-8 md:py-12">
      <Container>
        <!-- Tabs -->
        <div class="mb-8">
          <nav aria-label="Kategorie ofert" class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat.id"
              type="button"
              :aria-pressed="activeCategory === cat.id"
              class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none"
              :class="
                activeCategory === cat.id
                  ? 'bg-brand text-white border-brand shadow-glow'
                  : 'bg-card text-ink-muted border-card-border hover:text-ink hover:border-brand/30 hover:bg-page-alt'
              "
              @click="activeCategory = cat.id"
            >
              <Icon :name="cat.icon" class="w-4 h-4" />
              {{ cat.label }}
            </button>
          </nav>
        </div>

        <!-- Offer cards -->
        <Transition name="fade-grid" mode="out-in">
          <div :key="activeCategory" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            v-for="offer in filteredOffers"
            :key="offer.id"
            class="bg-card border border-card-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand flex flex-col"
          >
            <div class="p-6 flex flex-col flex-1">
              <!-- Header: icon + name + insurer + badge -->
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-glass w-12 h-12 shrink-0">
                  <Icon :name="offer.icon" class="w-6 h-6 text-brand" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <h2 class="text-lg font-bold text-ink">{{ offer.name }}</h2>
                    <Badge v-if="offer.badge" color="green" class="text-xs">{{ offer.badge }}</Badge>
                  </div>
                  <p class="text-xs text-ink-muted mt-0.5">{{ offer.insurer }}</p>
                </div>
              </div>

              <!-- Description -->
              <p class="text-sm text-ink-muted leading-relaxed mb-4">
                {{ offer.description }}
              </p>

              <!-- Features -->
              <ul class="space-y-2 mb-5">
                <li
                  v-for="feature in offer.features"
                  :key="feature"
                  class="flex items-start gap-2.5 text-sm"
                >
                  <Icon name="lucide:check-circle" class="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <span class="text-ink-muted">{{ feature }}</span>
                </li>
              </ul>

              <!-- Spacer to push footer down -->
              <div class="mt-auto">
                <!-- Discount code -->
                <div v-if="offer.discountCode" class="mb-4">
                  <p class="text-xs font-medium text-ink-muted mb-1.5">{{ offer.discountLabel }}:</p>
                  <button
                    type="button"
                    class="group w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border-2 border-dashed border-brand/40 bg-brand-subtle transition-all duration-300 hover:border-brand focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none"
                    :aria-label="`Kopiuj kod rabatowy ${offer.discountCode}`"
                    @click="copyCode(offer.id, offer.discountCode!)"
                  >
                    <span class="font-mono text-lg font-bold text-brand-text tracking-wider">
                      {{ offer.discountCode }}
                    </span>
                    <span
                      class="inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-300"
                      :class="copiedId === offer.id ? 'text-green-600 dark:text-green-400' : 'text-ink-muted group-hover:text-brand-text'"
                    >
                      <Icon
                        :name="copiedId === offer.id ? 'lucide:check' : 'lucide:copy'"
                        class="w-3.5 h-3.5"
                      />
                      {{ copiedId === offer.id ? 'Skopiowano!' : 'Kopiuj' }}
                    </span>
                  </button>
                  <p class="text-[11px] text-ink-muted mt-1.5 leading-relaxed">
                    Wklej ten kod w polu „Kod rabatowy" na stronie ubezpieczyciela.
                  </p>
                </div>

                <!-- CTA -->
                <a
                  :href="offer.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-xl btn-navy shadow-glow-navy transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-text/50 focus-visible:outline-none"
                >
                  {{ offer.ctaLabel || 'Przejdź do oferty' }}
                  <Icon name="lucide:external-link" class="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>

          <!-- Empty state -->
          <div
            v-if="filteredOffers.length === 0"
            class="col-span-full text-center py-12 text-ink-muted"
          >
            <Icon name="lucide:search-x" class="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p>Brak ofert w tej kategorii.</p>
          </div>
          </div>
        </Transition>
      </Container>
    </section>

    <!-- Agent trust section -->
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-col sm:flex-row items-start gap-6 p-6 md:p-8 bg-card rounded-2xl border border-card-border shadow-sm">
            <NuxtImg
              src="/images/hero.png"
              alt="Mirosława Poniatowska — Twój agent ubezpieczeniowy"
              width="96"
              height="96"
              class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-2 border-brand/20 shrink-0"
              loading="lazy"
              format="webp"
            />
            <div>
              <h2 class="text-xl font-bold text-ink mb-2">
                Kupujesz online, ale nie jesteś sam/a
              </h2>
              <p class="text-ink-muted leading-relaxed mb-4">
                Każda polisa kupiona przez tę stronę jest przypisana do mnie — Mirosławy Poniatowskiej. Oznacza to, że masz
                pełne wsparcie doświadczonego agenta: pomogę z likwidacją szkody, zmianą zakresu polisy lub odnowieniem
                ubezpieczenia. Bez infolinii, bez czekania.
              </p>
              <div class="flex flex-wrap gap-4 text-sm">
                <span class="flex items-center gap-2 text-ink-muted">
                  <Icon name="lucide:award" class="w-4 h-4 text-brand" />
                  {{ business.trustSignals[0].value }} {{ business.trustSignals[0].label.toLowerCase() }}
                </span>
                <span class="flex items-center gap-2 text-ink-muted">
                  <Icon name="lucide:users" class="w-4 h-4 text-brand" />
                  {{ business.trustSignals[2].value }} {{ business.trustSignals[2].label.toLowerCase() }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="py-12 md:py-16">
      <Container>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight text-ink mb-4">
            Potrzebujesz pomocy z wyborem?
          </h2>
          <p class="text-ink-muted mb-8">
            Nie każde ubezpieczenie da się kupić online — i nie każde powinno się kupować samodzielnie.
            Zadzwoń lub napisz, a przeprowadzę bezpłatną analizę potrzeb.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/kontakt#formularz" size="lg" class="pulse-brand">
              <Icon name="lucide:phone" class="w-5 h-5 mr-2" />
              Umów konsultację
            </Button>
            <Button to="/uslugi" variant="outline" size="lg">
              <Icon name="lucide:list" class="w-5 h-5 mr-2" />
              Zobacz pełną ofertę
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
.fade-grid-enter-active,
.fade-grid-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-grid-enter-from {
  opacity: 0;
  transform: translateY(0.5rem);
}

.fade-grid-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
