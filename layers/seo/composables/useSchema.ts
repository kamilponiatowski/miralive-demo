export const useSchema = () => {
  const business = useBusinessData()

  const mapDaysToSchemaOrg = (days: string): string[] => {
    const dayMap: Record<string, string> = {
      'Pon': 'Monday',
      'Wt': 'Tuesday',
      'Sr': 'Wednesday',
      'Czw': 'Thursday',
      'Pt': 'Friday',
      'Sob': 'Saturday',
      'Nd': 'Sunday',
    }

    if (days.includes('-')) {
      const [start, end] = days.split('-')
      const weekdays = ['Pon', 'Wt', 'Sr', 'Czw', 'Pt', 'Sob', 'Nd']
      const startIdx = weekdays.indexOf(start)
      const endIdx = weekdays.indexOf(end)
      if (startIdx !== -1 && endIdx !== -1) {
        return weekdays.slice(startIdx, endIdx + 1).map((d) => dayMap[d])
      }
    }
    return dayMap[days] ? [dayMap[days]] : []
  }

  useSchemaOrg([
    defineLocalBusiness({
      '@type': business.type as 'InsuranceAgency',
      'name': business.name,
      'description': business.longDescription,
      'url': 'https://miralive.pl',
      'telephone': business.contact.phone[0],
      'email': business.contact.email,
      'foundingDate': `${business.foundedYear}`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': business.address.street,
        'postalCode': business.address.postalCode,
        'addressLocality': business.address.city,
        'addressRegion': business.address.region,
        'addressCountry': business.address.country,
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': business.geo.latitude,
        'longitude': business.geo.longitude,
      },
      'openingHoursSpecification': business.hours.regular.map((h) => ({
        '@type': 'OpeningHoursSpecification' as const,
        'dayOfWeek': mapDaysToSchemaOrg(h.days),
        'opens': h.open,
        'closes': h.close,
      })),
      'sameAs': Object.values(business.social),
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'województwo kujawsko-pomorskie',
      },
    }),
  ])
}
