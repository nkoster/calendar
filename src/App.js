import './App.css'
import {ContainerMain} from './components/ContainerMain'
import {StateProvider} from './state'

function App() {
  return (
    <div className='App'>
      <StateProvider>
        <ContainerMain />
      </StateProvider>
    </div>
    )
}

export default App
