import './ContainerHeader.css'
import {State} from '../state'
import {getWeekNumber, isToday} from '../util'

const monthTable = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
  'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
]

const weekTable = [
  'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY','SATURDAY'
]

export function ContainerHeader() {

  const {timestamp} = State()

  const month = new Date(timestamp).getMonth()
  const year = new Date(timestamp).getFullYear()
  const day = new Date(timestamp).getDay()
  const dayOfMonth = new Date(timestamp).getDate()
  const week = getWeekNumber(timestamp)
  console.log(isToday(timestamp))
  return (
    <div className='ContainerHeader'>
      <div className='ContainerHeaderLeft'>{monthTable[month]} {year}</div>
      <div className='ContainerHeaderRight'>{isToday(timestamp) &&
        <div>{weekTable[day]}, {monthTable[month]} {dayOfMonth}&nbsp;{'\u2014'}&nbsp;</div>}
        <div>WEEK {week}</div>
        </div>
    </div>
  )

}
