export interface BusinessService {
  id: string
  name: string
  description: string
  icon: string
}

export interface BusinessData {
  name: string
  legalName: string
  type: string
  description: string
  longDescription: string
  foundedYear: number
  slogan: string
  address: {
    street: string
    postalCode: string
    city: string
    region: string
    country: string
  }
  geo: { latitude: number; longitude: number }
  contact: {
    phone: string[]
    email: string
  }
  hours: {
    regular: { days: string; open: string; close: string }[]
    closed: string[]
    notes?: string
  }
  services: BusinessService[]
  social: Record<string, string>
  brand: {
    primaryColor: string
    font: string
  }
  trustSignals: { label: string; value: string }[]
  partners: string[]
}

export const useBusinessData = (): BusinessData => {
  return {
    name: 'Miralive',
    legalName: 'Miralive Mirosława Poniatowska',
    type: 'InsuranceAgency',
    description: 'Specjalistyczne doradztwo ubezpieczeniowe — ubezpieczenia życiowe, zdrowotne, komunikacyjne i firmowe.',
    longDescription: 'Miralive to nowoczesna agencja ubezpieczeniowa prowadzona przez Mirosławę Poniatowską, specjalizująca się w ubezpieczeniach życiowych i zdrowotnych. Oferujemy indywidualną analizę potrzeb, porównanie ofert od kilkunastu towarzystw ubezpieczeniowych oraz wsparcie na każdym etapie — od wyboru polisy po likwidację szkody. Działamy we Włocławku i województwie kujawsko-pomorskim, łącząc lokalne zaufanie z nowoczesnym podejściem do doradztwa.',
    foundedYear: 2015,
    slogan: 'Twoje bezpieczeństwo, nasza specjalizacja',
    address: {
      street: 'ul. Spółdzielcza 3',
      postalCode: '87-810',
      city: 'Włocławek',
      region: 'kujawsko-pomorskie',
      country: 'PL',
    },
    geo: {
      latitude: 52.648404227151985,
      longitude: 19.06277057168136,
    },
    contact: {
      phone: ['+48 600 104 108'],
      email: 'kontakt@miralive.pl',
    },
    hours: {
      regular: [
        { days: 'Pon-Pt', open: '09:00', close: '17:00' },
        { days: 'Sob', open: '10:00', close: '13:00' },
      ],
      closed: ['Nd'],
    },
    services: [
      {
        id: 'ubezpieczenia-zyciowe',
        name: 'Ubezpieczenia Życiowe i Zdrowotne',
        description: 'Ochrona dochodu rodziny, zabezpieczenie na wypadek poważnych zachorowań, plany posagowe, druga opinia medyczna i polisy pod kredyt hipoteczny.',
        icon: 'lucide:heart-pulse',
      },
      {
        id: 'ubezpieczenia-komunikacyjne',
        name: 'Ubezpieczenia Komunikacyjne',
        description: 'Kompleksowe pakiety OC, AC, Assistance i NNW. Porównanie cen od kilkunastu towarzystw w jednym miejscu.',
        icon: 'lucide:car',
      },
      {
        id: 'ubezpieczenia-firmowe',
        name: 'Ubezpieczenia dla Firm',
        description: 'OC zawodowe, ubezpieczenie mienia firmy, grupowe polisy na życie dla pracowników, floty pojazdów i gwarancje ubezpieczeniowe.',
        icon: 'lucide:building-2',
      },
      {
        id: 'oc-medyczne',
        name: 'OC Zawodów Medycznych',
        description: 'Specjalistyczne OC dla lekarzy, pielęgniarek, ratowników medycznych i fizjoterapeutów. Ochrona przed roszczeniami pacjentów.',
        icon: 'lucide:stethoscope',
      },
      {
        id: 'ubezpieczenia-majatkowe',
        name: 'Ubezpieczenia Majątkowe',
        description: 'Ochrona domów, mieszkań i domków letniskowych od ognia, zalania, kradzieży i zdarzeń losowych.',
        icon: 'lucide:home',
      },
      {
        id: 'ubezpieczenia-szkolne',
        name: 'NNW Szkolne i Turystyczne',
        description: 'Ubezpieczenia NNW dla dzieci i młodzieży oraz polisy turystyczne na wakacje i podróże służbowe.',
        icon: 'lucide:graduation-cap',
      },
    ],
    social: {
      facebook: 'https://www.facebook.com/share/18fLXrv4bo/',
      googleMaps: 'https://maps.app.goo.gl/mUaogKHgtAXYgMvz6?g_st=aw',
    },
    brand: {
      primaryColor: '#1E3A5F',
      font: 'Inter',
    },
    trustSignals: [
      { label: 'Lat doświadczenia', value: '10+' },
      { label: 'Towarzystw ubezpieczeniowych', value: '20+' },
      { label: 'Zadowolonych klientów', value: '30000+' },
    ],
    partners: [
      'Vienna Life',
      'Ergo Hestia',
      'Generali',
      'Allianz',
      'PZU',
      'WARTA',
      'InterRisk',
      'Inter Polska',
      'UNIQA',
      'Nationale-Nederlanden',
      'COMPENSA',
      'LINK4',
      'Proama',
      'WIENER',
      'TUZ',
      'AGRO TUW',
      'Leadenhall',
      'Prévoir',
      'TRASTI',
      'BEZPIECZNY',
    ],
  }
}
