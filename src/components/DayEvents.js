import './DayEvents.css'
import {State} from '../state'

export function DayEvents() {
  const {timestamp} = State()
  return (
    <div className={`DayEventsScroller`}>
      <div className={`DayEventsGrid`}>
        {buildGrid(timestamp)}
      </div>
    </div>
  )
}

function buildGrid(timestamp) {
  const d = new Date()
  const dayOfWeek = d.getDay()
  const grid = []
  const isToday = new Date().toDateString() === new Date(timestamp).toDateString()
  for (let day = 0; day < 20; day++) {
    for (let week = 0; week < 7; week++) {
      grid.push(
        <div key={`${day} ${week}`} className={`DayEventsGridItem ${dayOfWeek === week && isToday? 'DayCurrent' : ''}`}>

        </div>
      )
    }
  }
  return grid
}
