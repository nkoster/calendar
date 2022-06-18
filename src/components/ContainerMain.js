import {ContainerMonth} from './ContainerMonth'
import {ContainerFilters} from './ContainerFilters'

export function ContainerMain() {
  return (
    <div className='ContainerMain'>
      <ContainerMonth />
      <ContainerFilters />
    </div>
  )
}
