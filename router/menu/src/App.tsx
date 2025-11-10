import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DriftPage from './pages/DriftPage'
import TimeAttackPage from './pages/TimeAttackPage'
import ForzaPage from './pages/ForzaPage'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="drift" element={<DriftPage />} />
        <Route path="timeattack" element={<TimeAttackPage />} />
        <Route path="forza" element={<ForzaPage />} />
      </Route>
    </Routes>
  )

}

export default App