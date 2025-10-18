import { type ChangeEvent } from 'react'

interface HexInputProps {
  value: string,
  onChange: (evt: ChangeEvent) => void
}

function HexInput({value, onChange}: HexInputProps) {

  return (
    <input 
      onChange={onChange} 
      value={value}
      type='text'
      placeholder="#000000"
    >
    </input>
  )

}

export default HexInput