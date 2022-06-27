import './ContainerHeader.css'
import {State, StateDispatch, updateTimestamp} from '../state'
import {
  getWeekNumber, isToday, oneYearAgo, oneYearAhead,
  oneMonthAgo, oneMonthAhead, oneWeekAgo, oneWeekAhead
} from '../util'
import {useEffect, useState} from 'react'

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
      onClick={() => updateTimestamp(dispatch, oneMonthAgo(timestamp))}>-</div>
  )
}

const RightButtonMonth = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneMonthAhead(timestamp))}>+</div>
  )
}

const LeftButtonYear = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneYearAgo(timestamp))}>-</div>
  )
}

const RightButtonYear = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneYearAhead(timestamp))}>+</div>
  )
}

const LeftButtonWeek = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneWeekAgo(timestamp))}>-</div>
  )
}

const RightButtonWeek = () => {
  const dispatch = StateDispatch()
  const {timestamp} = State()
  return (
    <div
      className='Buttons'
      onClick={() => updateTimestamp(dispatch, oneWeekAhead(timestamp))}>+</div>
  )
}

const Spacer = () => {
  return <div className='Spacer'></div>
}

export function ContainerHeader() {

  const today = new Date().getDay()
  const [showDay, setShowDay] = useState(today)

  useEffect(() => {
    setInterval(() => {
      setShowDay(new Date().getDay())
    }, 5000)
  }, [])

  const {timestamp} = State()

  const month = new Date(timestamp).getMonth()
  const year = new Date(timestamp).getFullYear()
  const day = new Date(timestamp).getDay()
  const dayOfMonth = new Date(timestamp).getDate()
  const week = getWeekNumber(timestamp)

  return (
    <div className='ContainerHeader'>
      <div className='ContainerHeaderLeft'>
        <LeftButtonMonth /> &nbsp; {monthTable[month]} &nbsp; <RightButtonMonth />
        <Spacer /><Spacer /><Spacer />
        <LeftButtonYear /> &nbsp; {year} &nbsp; <RightButtonYear />
      </div>
      <div className='ContainerHeaderRight'>
        <LeftButtonWeek /><Spacer />
        {isToday(timestamp) &&
        <div>{weekTable[day]}, {monthTable[month]} {dayOfMonth}&nbsp;{'\u2014'}&nbsp;</div>}
        <div>WEEK {week}, {(isToday(timestamp) && week === showDay) || monthTable[month]} {year}</div>
        <Spacer /><RightButtonWeek />
        </div>
    </div>
  )

}
