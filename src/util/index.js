export function getWeekNumber(timestamp) {
  const date = new Date(timestamp)
  const firstJanuary = new Date(date.getFullYear(), 0, 1)
  const numberOfDays = Math.floor((date - firstJanuary) / (24 * 60 * 60 * 1000))
  return Math.ceil((date.getDay() + 1 + numberOfDays) / 7)
}

export const isToday = timestamp => new Date().toDateString() === new Date(timestamp).toDateString()

export const oneYearAgo = timestamp => {
  const date = new Date(timestamp)
  date.setFullYear(date.getFullYear() - 1)
  return date.toDateString()
}

export const oneYearAhead = timestamp => {
  const date = new Date(timestamp)
  date.setFullYear(date.getFullYear() + 1)
  return date.toDateString()
}

export const oneMonthAgo = timestamp => {
  const date = new Date(timestamp)
  date.setMonth(date.getMonth() - 1)
  return date.toDateString()
}

export const oneMonthAhead = timestamp => {
  const date = new Date(timestamp)
  date.setMonth(date.getMonth() + 1)
  return date.toDateString()
}

export const oneWeekAgo = timestamp => {
  const date = new Date(timestamp)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7).toDateString()
}

export const oneWeekAhead = timestamp => {
  const date = new Date(timestamp)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7).toDateString()
}
