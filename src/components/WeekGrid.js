import './WeekGrid.css'
import {WeekGridItem} from './WeekGridItem'

export function WeekGrid(date) {
  return (
    <div className='WeekScroller'>
      <div className='WeekGrid'>
        {buildGrid(date)}
      </div>
    </div>
  )
}

function buildGrid(date) {
  const grid = []
  let count = 0
  // const d = new Date(date.date)
  // console.log(d)
  for (let hour = 0; hour < 24; hour++) {
    for (let week = 0; week < 7; week++) {
      count++
      grid.push(
        <WeekGridItem key={`${count}`} date={date} week={week} hour={hour}/>
      )
    }
  }
  return grid
}
