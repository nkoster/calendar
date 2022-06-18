import './WeekGridItem.css'

export function WeekGridItem({week, hour}) {
  const d = new Date()
  const dayOfWeek = d.getDay()

  return (
    <div className={`ItemDayEvents ItemHour ${dayOfWeek === week ? 'ItemCurrent' : ''}`}>
      {`${hour.toString().padStart(2, '0')}:00`}
    </div>
  )
}
