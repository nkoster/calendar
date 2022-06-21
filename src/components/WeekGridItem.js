import './WeekGridItem.css'
import {useEffect, useRef, useState} from 'react'
import {getMonthGrid} from '../util/getMonthGrid'

export function WeekGridItem({timestamp, week, hour}) {

  const monthTable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const grid = getMonthGrid(timestamp)
  const weekDays = grid.filter(week => {
    return week.includes(new Date(timestamp).getDate())
  })

  const year = new Date(timestamp).getFullYear()
  const month = new Date(timestamp).getMonth()

  const d = new Date()
  const dayOfWeek = d.getDay()
  const [currentMinutes, setCurrentMinutes] = useState(d.getMinutes())
  const [currentHour, setCurrentHour] = useState(d.getHours())
  const focus = useRef()

  const isToday = new Date().toDateString() === new Date(timestamp).toDateString()

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
      dayOfWeek === week && isToday ? 'ItemCurrent' : ''
    } ${
      dayOfWeek === week && currentHour === hour && isToday ? 'ItemCurrenTime' : ''
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
