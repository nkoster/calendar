import './WeekHeaderItem.css'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'

export function WeekHeaderItem({week}) {

  const weekMap = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

  const {timestamp} = State()
  const grid = getMonthGrid(timestamp)

  const weekDays = grid.filter(week => {
    return week.includes(new Date(timestamp).getDate())
  })

  const isToday = new Date().getDay() === week &&
    new Date().toDateString() === new Date(timestamp).toDateString()

  return (
    <div className='WeekHeaderItem'>
      <div className={`WeekHeaderItemWeek ${isToday && 'Today'}`}>{weekMap[week]}</div>
      <div className={`WeekHeaderItemDay ${isToday && 'TodayBox'}`}>{weekDays[0][week]}</div>
    </div>
  )
}
