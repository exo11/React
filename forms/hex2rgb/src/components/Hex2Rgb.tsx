import { useState } from 'react'
import { type ChangeEvent } from 'react'
import HexInput from './HexInput'

interface IState {
  error: boolean, 
  hex: string, 
  rgb: string | null
}

interface IObj {
  className?: string,
  style?: {backgroundColor: string}
}

function App() {
 
  const [state, setState] = useState<IState>({error: false, hex: '', rgb: null})
  
  const addRGB = (hex: string): string | null => {
    const arr: RegExpExecArray | null = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (arr) {arr.shift()}
    return arr ? `rgb(${arr.map(str => parseInt(str, 16)).join(', ')})` : null
  }

  const checkHex = (hex: string): boolean => /^#([\da-f]{6})$/i.test(hex)
  
  const checkLength = (hex: string): boolean => hex.length > 6

  const addStile = (hex: string): IObj | null => {
    return checkLength(hex) ? {style: {backgroundColor: hex}} : null
  }
  
  const inputHandler = (evt: ChangeEvent): void => {
    const {value: hex}: {value: string} = evt.target as HTMLInputElement
    
    if (checkHex(hex)) {
      setState({error: false, hex, rgb: addRGB(hex)})
    } else {
      setState({error: checkLength(hex), hex, rgb: checkLength(hex) ? 'ОШИБКА' : null})
    }
  
  }

  const obj: IObj | null = state.error ? {className: 'error'} : addStile(state.hex)
  
  return (
    <div {...obj}>
      <HexInput value={state.hex} onChange={inputHandler}/>
      <p>{state.rgb}</p>
    </div>
  )
}

export default App