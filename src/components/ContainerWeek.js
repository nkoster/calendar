import './ContainerWeek.css'
import {WeekHeader} from './WeekHeader'
import {DayEvents} from './DayEvents'

export function ContainerWeek() {
  return (
    <div className='ContainerWeek'>
      <WeekHeader />
      <DayEvents />
    </div>
  )
}
