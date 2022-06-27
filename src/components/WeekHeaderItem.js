import './WeekHeaderItem.css'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'
import {isToday, dateStamp} from '../util'
import {useEffect, useState} from 'react'

export function WeekHeaderItem({week}) {

  const today = new Date().getDay()
  const [showDay, setShowDay] = useState(today)

  useEffect(() => {
    setInterval(() => {
      setShowDay(new Date().getDay())
    }, 2000)
  }, [])

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
      <div className={`WeekHeaderItemWeek ${isToday(timestamp) && dayOfWeek === week && week === showDay && 'Today'}`}>{weekMap[week]}</div>
      <div className={`WeekHeaderItemDay ${isToday(timestamp) && dayOfWeek === week && week === showDay && 'TodayBox'}`}>{weekDays[0][week].split(' ')[1].replace(',','')}</div>
    </div>
  )
}
