export function getMonthGrid(someDay) {

  const date = new Date(someDay)
  const year = date.getFullYear()
  const month = date.getMonth()

  // test if we need to correct the tome zone offset
  const correction = new Date(2022, 1, 0).getDate() === 31 ? 1 : 0
  const daysInMonth = new Date(year, month + correction, 0).getDate()
  const daysInPrevMonth = new Date(year, month - 1 + correction, 0).getDate()
  const firstDay = new Date(year, month).getDay()

  const monthTable = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ]

  const grid = []

  for (let i = 0; i < firstDay; i++) {
    grid.push(`${month === 0 ? year-1 : year} ${month === 0 ? 'dec' : monthTable[month-1]} ${daysInPrevMonth - firstDay + i + 1}`)
  }

  for (let i = 0; i < daysInMonth; i++) {
    grid.push(`${year} ${monthTable[month]} ${i + 1}`)
  }

  const currentTotal = grid.length
  for (let i = 0; i < (7*6) - currentTotal; i++) {
    grid.push(`${month === 11 ? year+1 : year} ${month === 11 ? 'jan' : monthTable[month+1]} ${i + 1}`)
  }

  const weeks = []
  for (let i = 0; i < 6; i++) {
    weeks.push(grid.slice(i * 7, i * 7 + 7))
  }

  return weeks

}
