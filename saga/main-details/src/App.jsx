import { Routes, Route } from 'react-router'
import Home from './pages/HomePages'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id/details" element={<Home/>}/>
    </Routes>
  )
}

export default App
