import './WeekGridItem.css'

export function WeekGridItem({week, hour}) {
  const d = new Date()
  const dayOfWeek = d.getDay()
  const currentHour = d.getHours()
  const currentMinutes = d.getMinutes()

  console.log(currentMinutes)

  return (
    <div className={`ItemDayEvents ItemHour ${
      dayOfWeek === week ? 'ItemCurrent' : ''
    } ${
      dayOfWeek === week && currentHour === hour ? 'ItemCurrenTime' : ''
    }`}>
      {`${hour.toString().padStart(2, '0')}:00`}
      {dayOfWeek === week && currentHour === hour ?
        <div style={{
          position: 'absolute',
          left: '0',
          right: '0',
          top: `${Math.floor(currentMinutes/60*100)}%`,
          height: '1px',
          borderBottom: 'dashed 1px white'
        }}>
        </div> : ''}
    </div>
  )
}
