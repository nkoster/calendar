import {ContainerMonth} from './ContainerMonth'
import {ContainerFilters} from './ContainerFilters'
import {ContainerWeek} from './ContainerWeek'

export function ContainerMain() {
  return (
    <div className='ContainerMain'>
      <ContainerMonth />
      <ContainerFilters />
      <ContainerWeek />
    </div>
  )
}
