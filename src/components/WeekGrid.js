import './WeekGrid.css'
import {WeekGridItem} from './WeekGridItem'

export function WeekGrid({timestamp}) {
  return (
    <div className='WeekScroller'>
      <div className='WeekGrid'>
        {buildGrid(timestamp)}
      </div>
    </div>
  )
}

function buildGrid(timestamp) {
  const grid = []
  let count = 0
  for (let hour = 0; hour < 24; hour++) {
    for (let week = 0; week < 7; week++) {
      count++
      grid.push(
        <WeekGridItem key={`${count}`} timestamp={timestamp} week={week} hour={hour}/>
      )
    }
  }
  return grid
}
