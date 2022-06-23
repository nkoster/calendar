export function getWeekNumber(timestamp) {
  const date = new Date(timestamp)
  const firstJanuary = new Date(date.getFullYear(), 0, 1)
  const numberOfDays = Math.floor((date - firstJanuary) / (24 * 60 * 60 * 1000))
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7)
}

export const isToday = timestamp => new Date().toDateString() === new Date(timestamp).toDateString()
