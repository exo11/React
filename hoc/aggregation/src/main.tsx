import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App url={url}/>
  </StrictMode>
)
