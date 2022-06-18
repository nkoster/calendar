import './WeekGrid.css'

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
        <div key={`${hour} ${week}`} className='ItemDayEvents ItemHour'>
          {`${hour.toString().padStart(2, '0')}:00`}
        </div>
      )
    }
  }
  return grid
}
