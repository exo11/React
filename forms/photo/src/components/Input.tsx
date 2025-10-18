import { type ChangeEvent } from 'react'

function Input({onChange}: {onChange: (evt: ChangeEvent) => Promise<void>}) {

  return (
    <div className="input-container">
      <input type="file" accept="image/*" multiple onChange={onChange}></input>
      <div className="input-curtain">
        <h3>Click to Select</h3>
      </div>
    </div>
  )

}

export default Input