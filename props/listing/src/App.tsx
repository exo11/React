import etsy from '../data/etsy.ts'
import Listing from './components/Listing.tsx'
import './App.css'

const items = JSON.parse(etsy).filter((obj: {state: string}) => obj.state === 'active')

function App() {
  
  return (<Listing items={items}/>)

}

export default App
