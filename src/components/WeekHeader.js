import './WeekHeader.css'
import {WeekHeaderItem} from './WeekHeaderItem'

export function WeekHeader() {
  return (
    <div className='WeekHeader'>
      {[0,1,2,3,4,5,6].map(week => {
        return <WeekHeaderItem key={week} week={week}/>
      })}
    </div>
  )
}
