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
  const grid = []
  for (let week = 0; week < 7; week++) {
    for (let day = 0; day < 20; day++) {
      grid.push(<div className='DayEventsGridItem'></div>)
    }
  }
  return grid
}
