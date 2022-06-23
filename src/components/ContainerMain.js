import {ContainerMonth} from './ContainerMonth'
import {ContainerFilters} from './ContainerFilters'
import {ContainerWeek} from './ContainerWeek'
import {ContainerHeader} from './ContainerHeader'

export function ContainerMain() {
  return (
    <div className='ContainerMain'>
      <ContainerHeader />
      <ContainerMonth />
      <ContainerFilters />
      <ContainerWeek />
    </div>
  )
}
