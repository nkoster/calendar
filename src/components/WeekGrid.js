import './WeekGrid.css'
import {WeekGridItem} from './WeekGridItem'

export function WeekGrid() {
  return (
    <div className='WeekScroller'>
      <div className='WeekGrid'>
        {buildGrid()}
      </div>
    </div>
  )
}

function buildGrid() {
  const grid = []
  for (let hour = 0; hour < 24; hour++) {
    for (let week = 0; week < 7; week++) {
      grid.push(
        <WeekGridItem key={`${hour} ${week}`} week={week} hour={hour}/>
      )
    }
  }
  return grid
}
