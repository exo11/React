import Dropdown from './components/Dropdown'
import './App.css'

const options = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']

function App() {
  
  return (
    <Dropdown options={options}/>
  )
}

export default App
