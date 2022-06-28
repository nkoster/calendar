import {ContainerMonth} from './ContainerMonth'
import {ContainerFilters} from './ContainerFilters'
import {ContainerWeek} from './ContainerWeek'
import {ContainerHeader} from './ContainerHeader'
import {useEffect} from 'react'
import {State, StateDispatch, updateTimestamp} from '../state'
import {getWeekNumber} from '../util'

export function ContainerMain() {

  const weekNumber = getWeekNumber(new Date().toString())
  const year = new Date().getFullYear()
  const {timestamp} = State()
  const dispatch = StateDispatch()

  useEffect(() => {
    if (weekNumber === getWeekNumber(timestamp) && year === new Date(timestamp).getFullYear()) {
      updateTimestamp(dispatch, new Date().toString()).catch(err => console.log(err))
    }
  }, [timestamp, dispatch, weekNumber, year])

  return (
    <div className='ContainerMain'>
      <ContainerHeader />
      <ContainerMonth />
      <ContainerFilters />
      <ContainerWeek />
    </div>
  )

}
