import './WeekGridItem.css'
import {useEffect, useRef, useState} from 'react'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'
import {isToday, dateStamp} from '../util'

export function WeekGridItem({week, hour}) {

  const monthTable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const {timestamp} = State()
  const grid = getMonthGrid(timestamp)

  const weekDays = grid.filter(week => {
    return week.includes(dateStamp(timestamp))
  })

  const year = new Date(timestamp).getFullYear()
  const month = new Date(timestamp).getMonth()

  const d = new Date()
  const dayOfWeek = d.getDay()
  const [currentMinutes, setCurrentMinutes] = useState(d.getMinutes())
  const [currentHour, setCurrentHour] = useState(d.getHours())
  const focus = useRef()

  useEffect(() => {
    setInterval(() => {
      const d = new Date()
      setCurrentMinutes(d.getMinutes())
      setCurrentHour(d.getHours())
    }, 5000)
    setTimeout(() => {
      focus.current?.scrollIntoView({behavior:'smooth'})
    }, 500)
  }, [])

  return (
    <div className={`ItemHour ${
      dayOfWeek === week && isToday(timestamp) ? 'ItemCurrent' : ''
    } ${
      dayOfWeek === week && currentHour === hour && isToday(timestamp) ? 'ItemCurrenTime' : ''
    }`} title={`${year}, ${monthTable[month]} ${weekDays[0][week]}, ${hour.toString().padStart(2, '0')}:00`}>
      {`${hour.toString().padStart(2, '0')}:00`}
      {dayOfWeek === week && currentHour === hour && isToday?
        <div ref={focus} style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: `${Math.floor(currentMinutes / 60 * 100)}%`,
          height: '1px',
          borderBottom: 'dashed 1px white'
        }}>
        </div> : ''}
    </div>
  )
}
