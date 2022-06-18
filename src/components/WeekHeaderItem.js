import './WeekHeaderItem.css'

export function WeekHeaderItem({week}) {

  const weekMap = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const d = new Date()
  const dayOfWeek = d.getDay()
  const dayOfMonth = d.getDate()
  const weekDays = getWeekDays(dayOfWeek, dayOfMonth)

  function getWeekDays() {
    const w = []
    for (let i = 0; i < 7; i++) {
      w.push(dayOfMonth + (i - dayOfWeek))
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
