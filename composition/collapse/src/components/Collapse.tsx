import { useState } from 'react'
import Label from './Label'
import Buttons from './Buttons'

const labelText = 'Some placeholder content for the collapse component.'

function Collapse() {

  const [state, setState] = useState<boolean>(false)

  const toggleLabel = (evt: React.MouseEvent): void => {
    const target = evt.target as HTMLButtonElement
    setState(target.dataset.action === 'true')
  }
   
  return (
    <>
      <Buttons onClick={toggleLabel}/>
      {state ? <Label text={labelText}/> : null}
    </>
  )

}

export default Collapse