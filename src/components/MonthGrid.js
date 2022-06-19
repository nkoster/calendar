import './MonthGrid.css'

export function MonthGrid() {
  return (
    <>
      <div className='MonthGridHeader'>
        {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(day => <div key={day} className='MonthGridItem'>{day}</div> )}
      </div>
      <div className='MonthGrid'>
        {buildGrid()}
      </div>
    </>
  )
}

function buildGrid() {

  const grid = []
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const daysInMonth = getDaysInMonth(year, month, 0)
  const firstDay = new Date(year, month, 0).getDay()
  const daysInPrevMonth = new Date(year, month-1, 0).getDate()

  let count = 0

  for (let day = 0; day < firstDay-1; day++) {
    count++
    grid.push(
      <div className='MonthGridItem' key={`${count}`}>{daysInPrevMonth-(firstDay-day)+2}</div>
    )
  }

  for (let day = 0; day < daysInMonth; day++) {
    count++
    const today = new Date()
    const timestamp = `${year}/${month}/${day+1}`
    const other = new Date(timestamp)
    const isToday = today.toDateString() === other.toDateString()
    grid.push(
      <div className={`MonthGridItem ${isToday ? 'IsToday' : ''}`} key={`${count}`}>{day+1}</div>
    )
  }

  for (let day = 0; day < 7*6-count; day ++) {
    grid.push(
      <div className='MonthGridItem' key={`${count} ${day}`}>{day+1}</div>
    )
  }

  return grid

}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}
