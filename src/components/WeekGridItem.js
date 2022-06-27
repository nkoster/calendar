import './WeekGridItem.css'
import {useEffect, useRef, useState} from 'react'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'
import {isToday, dateStamp} from '../util'

export function WeekGridItem({week, hour}) {

  const {timestamp} = State()
  const grid = getMonthGrid(timestamp)

  const weekDays = grid.filter(week => {
    return week.includes(dateStamp(timestamp))
  })

  const d = new Date()
  const dayOfWeek = d.getDay()
  const [currentMinutes, setCurrentMinutes] = useState(d.getMinutes())
  const [currentHour, setCurrentHour] = useState(d.getHours())
  const focus = useRef()

  const today = new Date().getDay()
  const [showDay, setShowDay] = useState(today)

  useEffect(() => {
    setInterval(() => {
      const d = new Date()
      setCurrentMinutes(d.getMinutes())
      setCurrentHour(d.getHours())
      setShowDay(new Date().getDay())
    }, 5000)
    setTimeout(() => {
      focus.current?.scrollIntoView({behavior:'smooth'})
    }, 500)
  }, [])

  return (
    <div className={`ItemHour ${
      dayOfWeek === week && isToday(timestamp) && week === showDay ? 'ItemCurrent' : ''
    } ${
      dayOfWeek === week && currentHour === hour && isToday(timestamp) && week === showDay ? 'ItemCurrenTime' : ''
    }`} title={`${weekDays[0][week].split(',')[0]}, ${hour.toString().padStart(2, '0')}:00`}>
      {`${hour.toString().padStart(2, '0')}:00`}
      {dayOfWeek === week && currentHour === hour && isToday(timestamp) && week === showDay ?
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
