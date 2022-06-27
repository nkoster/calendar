import './WeekHeaderItem.css'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'
import {isToday, dateStamp} from '../util'

export function WeekHeaderItem({week}) {

  const weekMap = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

  const {timestamp} = State()
  const grid = getMonthGrid(timestamp)

  const d = new Date()
  const dayOfWeek = d.getDay()

  const weekDays = grid.filter(week => {
    return week.includes(dateStamp(timestamp))
  })

  return (
    <div className='WeekHeaderItem'>
      <div className={`WeekHeaderItemWeek ${isToday(timestamp) && dayOfWeek === week && 'Today'}`}>{weekMap[week]}</div>
      <div className={`WeekHeaderItemDay ${isToday(timestamp) && dayOfWeek === week && 'TodayBox'}`}>{weekDays[0][week].split(' ')[2]}</div>
    </div>
  )
}
