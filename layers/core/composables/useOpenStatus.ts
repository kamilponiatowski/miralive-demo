export const useOpenStatus = () => {
  const business = useBusinessData()
  const isOpen = ref(false)
  const statusText = ref('Sprawdzam...')

  onMounted(() => {
    const now = new Date()
    const dayIndex = now.getDay() // 0=Nd, 1=Pon, 2=Wt, 3=Sr, 4=Czw, 5=Pt, 6=Sob
    const currentTime = now.getHours() * 100 + now.getMinutes()

    // Map day index to Polish schedule
    const dayMap: Record<number, string> = {
      1: 'Pon-Pt',
      2: 'Pon-Pt',
      3: 'Pon-Pt',
      4: 'Pon-Pt',
      5: 'Pon-Pt',
      6: 'Sob',
      0: 'Nd',
    }

    const todayKey = dayMap[dayIndex]

    if (business.hours.closed.includes(todayKey)) {
      isOpen.value = false
      statusText.value = 'Zamknięte'
      return
    }

    const schedule = business.hours.regular.find((h) => h.days === todayKey)
    if (!schedule) {
      isOpen.value = false
      statusText.value = 'Zamknięte'
      return
    }

    const openTime = parseInt(schedule.open.replace(':', ''))
    const closeTime = parseInt(schedule.close.replace(':', ''))

    if (currentTime >= openTime && currentTime < closeTime) {
      isOpen.value = true
      statusText.value = `Otwarte do ${schedule.close}`
    } else {
      isOpen.value = false
      statusText.value = 'Zamknięte'
    }
  })

  return { isOpen: readonly(isOpen), statusText: readonly(statusText) }
}
