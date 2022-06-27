import {useEffect, useState} from 'react'
import './MonthGrid.css'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'
import {dateStamp} from '../util'
import {isToday} from '../util'

export function MonthGrid() {

  const {timestamp} = State()
  const currentDate = new Date(timestamp)
  const today = currentDate.getDay()
  const [showDay, setShowDay] = useState(today)

  useEffect(() => {
    setInterval(() => {
      setShowDay(new Date().getDay())
    }, 2000)
  }, [])

  function buildGrid(d) {

    const grid = []
    const date = new Date(d)
    const year = date.getFullYear()
    const month = date.getMonth()
    const gridData = getMonthGrid(date)
    let count = 0
    const monthTable = [
      'jan', 'feb', 'mar', 'apr', 'may', 'jun',
      'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ]

    gridData.forEach(week => {
      week.forEach(day => {
        count++
        const timestamp = `${year} ${monthTable[month]} ${day.split(' ')[2]}`
        const isToday = dateStamp(new Date().toDateString()) === dateStamp(timestamp)
        grid.push(<div className={`MonthGridItem ${isToday ? 'IsToday' : ''}`} key={count}>{day.split(' ')[2]}</div>)
      })
    })

    return grid

  }

  return (
    <>
      <div className='MonthGridHeader'>
        {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
          .map((day, i) => <div key={day} className={
            `MonthGridHeaderItem ${i === showDay && isToday(timestamp) ? 'MonthGridHeaderItemToday' : ''}`
          }>{day}</div> )}
      </div>
      <div className='MonthGrid'>
        {buildGrid(currentDate)}
      </div>
    </>
  )
}
