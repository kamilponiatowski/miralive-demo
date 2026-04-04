<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: `Polityka Cookies — ${business.name}`,
  description: `Informacje o plikach cookies wykorzystywanych na stronie ${business.name}.`,
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
            Polityka Cookies
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
          <h2>1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies (ciasteczka) to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu
            (komputerze, telefonie, tablecie) podczas korzystania ze stron internetowych. Służą do
            zapamiętywania preferencji, zapewnienia prawidłowego działania strony i analizy ruchu.
          </p>

          <h2>2. Kto jest administratorem cookies?</h2>
          <p>
            Administratorem plików cookies jest <strong>{{ business.legalName }}</strong>,
            z siedzibą przy {{ business.address.street }}, {{ business.address.postalCode }} {{ business.address.city }}.
          </p>

          <h2>3. Jakie cookies wykorzystujemy?</h2>

          <h3>a) Cookies niezbędne (techniczne)</h3>
          <p>
            Są konieczne do prawidłowego działania strony. Nie wymagają Twojej zgody.
          </p>
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Cel</th>
                <th>Czas życia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>color-mode</code></td>
                <td>Zapamiętanie wybranego trybu kolorystycznego (jasny/ciemny)</td>
                <td>1 rok</td>
              </tr>
            </tbody>
          </table>

          <h3>b) Cookies funkcjonalne</h3>
          <p>
            Pozwalają zapamiętać Twoje preferencje i ustawienia.
          </p>
          <table>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Cel</th>
                <th>Czas życia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>miralive_cookies_consent</code></td>
                <td>Zapamiętanie decyzji o plikach cookies</td>
                <td>1 rok</td>
              </tr>
              <tr>
                <td><code>miralive_popup_shown</code></td>
                <td>Zapamiętanie wyświetlenia okna kontaktowego (localStorage)</td>
                <td>Sesja przeglądarki</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Cookies stron trzecich</h2>
          <p>
            Na naszej stronie mogą być ładowane zasoby z usług zewnętrznych:
          </p>
          <ul>
            <li><strong>Google Maps</strong> (strona Kontakt) — mapy mogą ustawiać własne cookies. Polityka prywatności Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
            <li><strong>Bunny Fonts</strong> — dostarczanie czcionek. Bunny Fonts nie wykorzystuje cookies i nie śledzi użytkowników.</li>
          </ul>

          <h2>5. Jak zarządzać cookies?</h2>
          <p>
            Możesz w dowolnym momencie zmienić ustawienia cookies w swojej przeglądarce:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/pl/kb/usuwanie-ciasteczek" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
          <p>
            Wyłączenie cookies może wpłynąć na poprawne działanie niektórych funkcji strony.
          </p>

          <h2>6. Podstawa prawna</h2>
          <p>
            Stosowanie cookies technicznych opiera się na prawnie uzasadnionym interesie Administratora (art. 6 ust. 1 lit. f RODO).
            Cookies funkcjonalne i analityczne stosowane są na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO), zgodnie z
            art. 173 ustawy z dnia 16 lipca 2004 r. — Prawo telekomunikacyjne.
          </p>

          <h2>7. Zmiany polityki cookies</h2>
          <p>
            Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki Cookies.
            O zmianach informujemy na tej stronie.
          </p>

          <h2>8. Kontakt</h2>
          <p>
            W razie pytań dotyczących plików cookies skontaktuj się z nami:
            <a :href="`mailto:${business.contact.email}`">{{ business.contact.email }}</a>.
          </p>
        </div>
      </Container>
    </section>
  </div>
</template>
