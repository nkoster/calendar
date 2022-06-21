import './ContainerWeek.css'
import {WeekHeader} from './WeekHeader'
import {DayEvents} from './DayEvents'
import {WeekGrid} from './WeekGrid'

export function ContainerWeek({timestamp}) {
  return (
    <div className='ContainerWeek'>
      <WeekHeader timestamp={timestamp}/>
      <DayEvents />
      <WeekGrid date={new Date(timestamp).toDateString()}/>
    </div>
  )
}
