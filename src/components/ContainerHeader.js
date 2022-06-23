import './ContainerHeader.css'
import {State, StateDispatch, updateTimestamp} from '../state'
import {getWeekNumber, isToday, oneYearAgo, oneYearAhead, oneMonthAgo, oneMonthAhead} from '../util'

const monthTable = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
  'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
]

const weekTable = [
  'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY','SATURDAY'
]

const LeftButtonMonth = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneMonthAgo(timestamp))}>
      {'\u2190'}
    </div>
  )
}

const RightButtonMonth = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneMonthAhead(timestamp))}>
      {'\u2192'}
    </div>
  )
}

const LeftButtonYear = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneYearAgo(timestamp))}>
      {'\u2190'}
    </div>
  )
}

const RightButtonYear = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneYearAhead(timestamp))}>
      {'\u2192'}
    </div>
  )
}

const Spacer = () => {
  return <div className='Spacer'></div>
}

export function ContainerHeader() {

  const {timestamp} = State()

  const month = new Date(timestamp).getMonth()
  const year = new Date(timestamp).getFullYear()
  const day = new Date(timestamp).getDay()
  const dayOfMonth = new Date(timestamp).getDate()
  const week = getWeekNumber(timestamp)

  return (
    <div className='ContainerHeader'>
      <div className='ContainerHeaderLeft'>
        <LeftButtonMonth />{monthTable[month]}<RightButtonMonth />
        <Spacer />
        <LeftButtonYear />{year}<RightButtonYear />
      </div>
      <div className='ContainerHeaderRight'>{isToday(timestamp) &&
        <div>{weekTable[day]}, {monthTable[month]} {dayOfMonth}&nbsp;{'\u2014'}&nbsp;</div>}
        <div>WEEK {week}</div>
        </div>
    </div>
  )

}
