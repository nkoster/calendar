import './WeekGridItem.css'

export function WeekGridItem({hour}) {
  return (
    <div className='ItemDayEvents ItemHour'>
      {`${hour.toString().padStart(2, '0')}:00`}
    </div>
  )
}
