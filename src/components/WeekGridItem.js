import './WeekGridItem.css'
import {useEffect, useRef, useState} from 'react'

export function WeekGridItem({week, hour}) {

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
    <div className={`ItemDayEvents ItemHour ${
      dayOfWeek === week ? 'ItemCurrent' : ''
    } ${
      dayOfWeek === week && currentHour === hour ? 'ItemCurrenTime' : ''
    }`}>
      {`${hour.toString().padStart(2, '0')}:00`}
      {dayOfWeek === week && currentHour === hour ?
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
