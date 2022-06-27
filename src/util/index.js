import {getMonthGrid} from './getMonthGrid'

export const isToday = timestamp => new Date().toDateString() === new Date(timestamp).toDateString()

export const oneYearAgo = timestamp => {
  const date = new Date(timestamp)
  date.setFullYear(date.getFullYear() - 1)
  return date.toString()
}

export const oneYearAhead = timestamp => {
  const date = new Date(timestamp)
  date.setFullYear(date.getFullYear() + 1)
  return date.toString()
}

export const oneMonthAgo = timestamp => {
  const date = new Date(timestamp)
  date.setDate(new Date().getDate())
  date.setMonth(date.getMonth() - 1)
  return date.toString()
}

export const oneMonthAhead = timestamp => {
  const date = new Date(timestamp)
  date.setDate(new Date().getDate())
  date.setMonth(date.getMonth() + 1)
  return date.toString()
}

export const oneWeekAgo = timestamp => {
  const date = new Date(timestamp)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7).toString()
}

export const oneWeekAhead = timestamp => {
  const date = new Date(timestamp)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7).toString()
}

export function dateStamp(timestamp) {
  const monthTable = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ]
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return `${year} ${monthTable[month]} ${day}`
}

export function yearGrid(timestamp) {
  const year = new Date(timestamp).getFullYear()
  const grid = []
  for (let month = 0; month < 12; month++) {
    const monthTable = [
      'jan', 'feb', 'mar', 'apr', 'may', 'jun',
      'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    grid.push(...getMonthGrid(`${year} ${monthTable[month]} 14`))
  }
  return grid.filter((n, i) => {
    if (JSON.stringify(n) === JSON.stringify(grid[i - 2])) return false
    return JSON.stringify(n) !== JSON.stringify(grid[i - 1])
  })
}

export function getWeekNumber(timestamp) {
  const monthTable = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ]
  const grid = yearGrid(timestamp)
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    count++
    if (grid[i].includes(`${year} ${monthTable[month]} ${day}`)) break
  }
  return count
}
