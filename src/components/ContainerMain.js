import {ContainerMonth} from './ContainerMonth'
import {ContainerFilters} from './ContainerFilters'
import {ContainerWeek} from './ContainerWeek'

export function ContainerMain() {
  const timestamp = new Date().toDateString()
  console.log(timestamp)
  return (
    <div className='ContainerMain'>
      <ContainerMonth timestamp={timestamp}/>
      <ContainerFilters />
      <ContainerWeek timestamp={timestamp}/>
    </div>
  )
}
