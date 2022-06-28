import './App.css'
import {ContainerMain} from './components/ContainerMain'
import {StateProvider} from './state'
import {ModalAppointment} from './components/ModalAppointment'

function App() {
  return (
    <div className='App'>
      <StateProvider>
        <ContainerMain />
        <ModalAppointment />
      </StateProvider>
    </div>
    )
}

export default App
