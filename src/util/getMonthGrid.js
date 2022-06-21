export function getMonthGrid(someDay) {
  const gridData = []
  const date = new Date(someDay)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const daysInMonth = getDaysInMonth(year, month, 0)
  const firstDay = new Date(year, month, 0).getDay()
  const daysInPrevMonth = new Date(year, month-1, 0).getDate()
  let count = 0
  for (let day = 0; day < firstDay-1; day++) {
    count++
    gridData.push(daysInPrevMonth-(firstDay-day)+2)
  }
  for (let day = 0; day < daysInMonth; day++) {
    count++
    gridData.push(day+1)
  }
  for (let day = 0; day < 7*6-count; day ++) {
    gridData.push(day+1)
  }
  const weeks = []
  for (let i = 0; i < 6; i++) {
    weeks.push(gridData.slice(i * 7, i * 7 + 7))
  }
  return weeks
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}
