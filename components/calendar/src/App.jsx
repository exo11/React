import Calendar from './components/Calendar.jsx'
import './App.css'

const now = new Date()

function App() {

  return (
  <Calendar date={now}/>
)

}

export default App
