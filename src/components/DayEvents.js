import './DayEvents.css'

export function DayEvents() {

  return (
    <div className={`DayEventsScroller`}>
      <div className={`DayEventsGrid`}>
        {buildGrid()}
      </div>
    </div>
  )
}

function buildGrid() {
  const d = new Date()
  const dayOfWeek = d.getDay()
  const grid = []
  for (let day = 0; day < 20; day++) {
    for (let week = 0; week < 7; week++) {
      grid.push(
        <div key={`${day} ${week}`} className={`DayEventsGridItem ${dayOfWeek === week ? 'DayCurrent' : ''}`}>

        </div>
      )
    }
  }
  return grid
}
