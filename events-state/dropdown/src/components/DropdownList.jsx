import { useState } from 'react'
import DropdownItem from './DropdownItem'

function DropdownList({options}) {

  const[active, setActive] = useState()

  const onActive = evt => {
    setActive(evt.target.dataset.id)
  }

  return (
    <ul data-id="dropdown" className="dropdown" onClick={onActive}>
      <DropdownItem options={options} active={active}/>
    </ul>
  )

}

export default DropdownList