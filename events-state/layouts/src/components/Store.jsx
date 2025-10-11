import { useState } from 'react'
import IconSwitch from './IconSwitch.jsx'
import CardsView from './CardsView.jsx'
import ListsView from './ListView.jsx'

function Store({products}) {
  
  const [view, setView] = useState('list')

  const onSwitch = () => {
    setView(view === 'list' ? 'module' : 'list')
  }
  
  return (
    <div className="container"> 
      <IconSwitch icon={`view_${view}`} onSwitch={onSwitch}/>
      {view === 'list' ? <CardsView cards={products}/> : <ListsView items={products}/>}
    </div>
  )

}

export default Store