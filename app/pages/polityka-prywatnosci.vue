<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: `Polityka Prywatności — ${business.name}`,
  description: `Polityka prywatności ${business.name}. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.`,
  robots: 'noindex, follow',
})
</script>

<template>
  <div>
    <section class="bg-page-alt py-12 md:py-16">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <Badge color="brand" class="mb-4">Dokumenty</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4">
            Polityka Prywatności
          </h1>
          <p class="text-lg text-ink-muted">
            Ostatnia aktualizacja: 4 kwietnia 2026 r.
          </p>
        </div>
      </Container>
    </section>

    <section class="py-12 md:py-16">
      <Container>
        <div class="prose prose-slate dark:prose-invert max-w-3xl mx-auto">
          <h2>1. Administrator danych osobowych</h2>
          <p>
            Administratorem Twoich danych osobowych jest <strong>{{ business.legalName }}</strong>,
            z siedzibą przy {{ business.address.street }}, {{ business.address.postalCode }} {{ business.address.city }}
            (dalej: „Administrator").
          </p>
          <p>
            Kontakt z Administratorem:
          </p>
          <ul>
            <li>Email: <a :href="`mailto:${business.contact.email}`">{{ business.contact.email }}</a></li>
            <li>Telefon: {{ business.contact.phone[0] }}</li>
            <li>Adres korespondencyjny: {{ business.address.street }}, {{ business.address.postalCode }} {{ business.address.city }}</li>
          </ul>

          <h2>2. Jakie dane zbieramy</h2>
          <p>Zbieramy dane osobowe, które nam dobrowolnie przekazujesz:</p>
          <ul>
            <li><strong>Formularz kontaktowy:</strong> imię i nazwisko, numer telefonu, adres email (opcjonalnie), treść wiadomości</li>
            <li><strong>Kontakt telefoniczny/email:</strong> numer telefonu, adres email, dane podane w rozmowie/korespondencji</li>
          </ul>
          <p>Dodatkowo automatycznie zbieramy:</p>
          <ul>
            <li>Adres IP (zanonimizowany)</li>
            <li>Typ przeglądarki i urządzenia</li>
            <li>Dane z plików cookies (patrz: <NuxtLink to="/polityka-cookies" class="text-brand hover:underline">Polityka Cookies</NuxtLink>)</li>
          </ul>

          <h2>3. Cele i podstawy prawne przetwarzania</h2>
          <table>
            <thead>
              <tr>
                <th>Cel</th>
                <th>Podstawa prawna (RODO)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Odpowiedź na zapytanie z formularza kontaktowego</td>
                <td>Art. 6 ust. 1 lit. f — prawnie uzasadniony interes Administratora</td>
              </tr>
              <tr>
                <td>Nawiązanie i realizacja współpracy ubezpieczeniowej</td>
                <td>Art. 6 ust. 1 lit. b — wykonanie umowy lub podjęcie działań przed jej zawarciem</td>
              </tr>
              <tr>
                <td>Wypełnienie obowiązków prawnych (np. archiwizacja dokumentów)</td>
                <td>Art. 6 ust. 1 lit. c — obowiązek prawny</td>
              </tr>
              <tr>
                <td>Dochodzenie lub obrona roszczeń</td>
                <td>Art. 6 ust. 1 lit. f — prawnie uzasadniony interes</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Odbiorcy danych</h2>
          <p>Twoje dane mogą być przekazywane:</p>
          <ul>
            <li>Towarzystwom ubezpieczeniowym — w celu przygotowania oferty lub obsługi polisy</li>
            <li>Dostawcy usługi formularza (FormSubmit.co) — w celu dostarczenia wiadomości z formularza kontaktowego</li>
            <li>Dostawcy hostingu strony internetowej</li>
            <li>Organom publicznym — gdy wymagają tego przepisy prawa</li>
          </ul>

          <h2>5. Przekazywanie danych do państw trzecich</h2>
          <p>
            Korzystanie z usługi FormSubmit.co może wiązać się z przekazaniem danych poza Europejski Obszar Gospodarczy.
            W takim przypadku transfer odbywa się na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską.
          </p>

          <h2>6. Okres przechowywania danych</h2>
          <ul>
            <li><strong>Dane z formularza kontaktowego:</strong> do 12 miesięcy od ostatniego kontaktu, chyba że dojdzie do nawiązania współpracy</li>
            <li><strong>Dane klientów:</strong> przez okres obowiązywania umowy ubezpieczeniowej oraz czas wymagany przepisami prawa (do 10 lat)</li>
            <li><strong>Dane do dochodzenia roszczeń:</strong> do momentu przedawnienia roszczeń (do 6 lat)</li>
          </ul>

          <h2>7. Twoje prawa</h2>
          <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
          <ul>
            <li><strong>Prawo dostępu</strong> — możesz uzyskać informację, jakie dane przetwarzamy</li>
            <li><strong>Prawo do sprostowania</strong> — możesz poprawić nieprawidłowe dane</li>
            <li><strong>Prawo do usunięcia</strong> („prawo do bycia zapomnianym")</li>
            <li><strong>Prawo do ograniczenia przetwarzania</strong></li>
            <li><strong>Prawo do przenoszenia danych</strong></li>
            <li><strong>Prawo do sprzeciwu</strong> — wobec przetwarzania opartego na prawnie uzasadnionym interesie</li>
            <li><strong>Prawo do cofnięcia zgody</strong> — w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania</li>
          </ul>
          <p>
            Aby skorzystać z powyższych praw, skontaktuj się ze mną: <a :href="`mailto:${business.contact.email}`">{{ business.contact.email }}</a>.
          </p>

          <h2>8. Prawo skargi do organu nadzorczego</h2>
          <p>
            Jeśli uważasz, że przetwarzanie Twoich danych narusza przepisy RODO, masz prawo złożyć skargę do
            Prezesa Urzędu Ochrony Danych Osobowych (PUODO), ul. Stawki 2, 00‑193 Warszawa,
            <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>.
          </p>

          <h2>9. Dobrowolność podania danych</h2>
          <p>
            Podanie danych osobowych jest dobrowolne, ale niezbędne do skontaktowania się ze mną
            za pośrednictwem formularza kontaktowego lub nawiązania współpracy.
          </p>

          <h2>10. Zmiany polityki prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do aktualizacji niniejszej Polityki Prywatności.
            O zmianach informujemy poprzez opublikowanie zaktualizowanej wersji na tej stronie.
          </p>
        </div>
      </Container>
    </section>
  </div>
</template>
