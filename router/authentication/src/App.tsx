import { Routes, Route} from 'react-router'
import Neto from './components/Neto'
import Home from './pages/HomePage'
import News from './pages/NewsPage' 
import NotFound from './pages/ErrorPage'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Neto />} >
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )

}

export default App
