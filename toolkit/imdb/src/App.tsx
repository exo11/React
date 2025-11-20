import {Routes, Route} from 'react-router'
import Home from './pages/homePage'
import BigCard from './components/BigCard'
import Favourites from './pages/favouritesPage'
import NotFound from './pages/notFoundPage'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<BigCard />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/favourites/:id" element={<BigCard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )

}

export default App