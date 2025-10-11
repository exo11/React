import { useState } from 'react'
import DropdownList from './DropdownList'

function Dropdown({options}) {

const [state, setState] = useState(false)

const onToggle = () => {setState(!state)}

  return(
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <button data-id="toggle" className="btn" onClick={onToggle}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        {state ? <DropdownList options={options}/> : <></>}
      </div>
    </div>
  )

}

export default Dropdown