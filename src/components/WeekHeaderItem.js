import './WeekHeaderItem.css'

export function WeekHeaderItem({week}) {

  const weekMap = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const d = new Date()
  const dayOfWeek = d.getDay()
  const dayOfMonth = d.getDate()
  const weekDays = getWeekDays(dayOfWeek, dayOfMonth)

  function getWeekDays(d, dm) {
    const w = []
    for (let i = 6; i > d; i--) {
      w.push(dm - i)
    }
    for (let i = d; i >= 0; i--) {
      w.push(dm - i)
    }
    return w
  }

  return (
    <div className='WeekHeaderItem'>
      <div className={`WeekHeaderItemWeek ${dayOfWeek === week && 'Today'}`}>{weekMap[week]}</div>
      <div className={`WeekHeaderItemDay ${dayOfWeek === week && 'TodayBox'}`}>{weekDays[week]}</div>
    </div>
  )
}
