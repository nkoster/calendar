import './MonthGrid.css'
import {getMonthGrid} from '../util/getMonthGrid'

import {useEffect, useState} from 'react'

export function MonthGrid() {

  const currentDate = new Date()
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
            `MonthGridHeaderItem ${i === showDay ? 'MonthGridHeaderItemToday' : ''}`
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
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  const gridData = getMonthGrid(date)
  gridData.forEach((week) => {
    week.forEach(day => {
      const today = new Date()
      const timestamp = `${year}/${month}/${day}`
      const other = new Date(timestamp)
      const isToday = today.toDateString() === other.toDateString()
      grid.push(<div className={`MonthGridItem ${isToday ? 'IsToday' : ''}`} key={`${week+day}`}>{day}</div>)
    })
  })

  return grid

}
