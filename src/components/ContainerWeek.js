import './ContainerWeek.css'
import {WeekHeader} from './WeekHeader'
import {DayEvents} from './DayEvents'
import {WeekGrid} from './WeekGrid'

export function ContainerWeek() {
  return (
    <div className='ContainerWeek'>
      <WeekHeader />
      <DayEvents />
      <WeekGrid />
    </div>
  )
}
