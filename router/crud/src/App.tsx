import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import SinglePostPage from './pages/SinglePostPage'

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/posts/new' element={<CreatePage/>}/>
      <Route path='/posts/:id' element={<SinglePostPage/>}/>
    </Routes>
  )

}

export default App
