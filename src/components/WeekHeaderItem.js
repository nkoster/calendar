import './WeekHeaderItem.css'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'
import {isToday} from '../util'

export function WeekHeaderItem({week}) {

  const weekMap = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

  const {timestamp} = State()
  const grid = getMonthGrid(timestamp)

  const weekDays = grid.filter(week => {
    return week.includes(new Date(timestamp).getDate())
  })

  const showToday = isToday(timestamp) && new Date().getDay() === week

  return (
    <div className='WeekHeaderItem'>
      <div className={`WeekHeaderItemWeek ${showToday && 'Today'}`}>{weekMap[week]}</div>
      <div className={`WeekHeaderItemDay ${showToday && 'TodayBox'}`}>{weekDays[0][week]}</div>
    </div>
  )
}
