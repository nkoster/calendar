import './ContainerMonth.css'
import {MonthGrid} from './MonthGrid'

export function ContainerMonth({timestamp}) {
  return (
    <div className='ContainerMonth'>
      <MonthGrid timestamp={timestamp}/>
    </div>
  )
}
