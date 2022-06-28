import {useEffect, useState} from 'react'
import './MonthGrid.css'
import {getMonthGrid} from '../util/getMonthGrid'
import {State} from '../state'
import {dateStamp, monthHasToday} from '../util'

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

  return (
    <>
      <div className='MonthGridHeader'>
        {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
          .map((day, i) => <div key={day} className={
            `MonthGridHeaderItem ${i === showDay && monthHasToday(timestamp) ? 'MonthGridHeaderItemToday' : ''}`
          }>{day}</div> )}
      </div>
      <div className='MonthGrid'>
        {buildGrid(currentDate)}
      </div>
    </>
  )
}

function buildGrid(d) {
  const grid = []
  const date = new Date(d)
  const gridData = getMonthGrid(date)
  let count = 0
  gridData.forEach(week => {
    week.forEach(day => {
      count++
      const isToday = dateStamp(new Date().toDateString()) === day
      grid.push(<div className={`MonthGridItem ${isToday ? 'IsToday' : ''}`} key={count}>{day.split(' ')[1].replace(',', '')}</div>)
    })
  })
  return grid
}
