import './WeekGrid.css'
import {WeekGridItem} from './WeekGridItem'
import {useEffect, useState} from 'react'

export function WeekGrid() {

  const today = new Date().getDay()
  const [showDay, setShowDay] = useState(today)

  useEffect(() => {
    setInterval(() => {
      setShowDay(new Date().getDay())
    }, 2000)
  }, [])

  return (
    <div className='WeekScroller'>
      <div className='WeekGrid'>
        {buildGrid(showDay)}
      </div>
    </div>
  )
}

function buildGrid(showDay) {
  const grid = []
  let count = 0
  for (let hour = 0; hour < 24; hour++) {
    for (let week = 0; week < 7; week++) {
      count++
      grid.push(
        <WeekGridItem key={`${count}`} showDay={showDay} week={week} hour={hour}/>
      )
    }
  }
  return grid
}
