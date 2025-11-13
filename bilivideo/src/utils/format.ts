const numberFormatter = new Intl.NumberFormat('zh-CN', {
  notation: 'compact',
  compactDisplay: 'short',
})

const dateFormatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

export const formatNumber = (value: number) => numberFormatter.format(value)

export const formatDate = (value: string) => dateFormatter.format(new Date(value))

export const formatRelativeTime = (value: string) => {
  const now = Date.now()
  const target = Date.parse(value)
  const diff = target - now
  const rtf = new Intl.RelativeTimeFormat('zh-CN', { numeric: 'auto' })
  const absDiff = Math.abs(diff)

  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ['year', 1000 * 60 * 60 * 24 * 365],
    ['month', 1000 * 60 * 60 * 24 * 30],
    ['week', 1000 * 60 * 60 * 24 * 7],
    ['day', 1000 * 60 * 60 * 24],
    ['hour', 1000 * 60 * 60],
    ['minute', 1000 * 60],
  ]

  for (const [unit, unitMs] of units) {
    if (absDiff >= unitMs || unit === 'minute') {
      const valueRounded = Math.round(diff / unitMs)
      return rtf.format(valueRounded, unit)
    }
  }
  return rtf.format(0, 'minute')
}
