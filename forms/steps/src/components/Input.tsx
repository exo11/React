import { type InputProps} from '../../model/model'

function Input({label, name, pattern}: InputProps) {
  
  return (
    <label>
      <p>{label}</p>
      <input 
        type="text" 
        name={name} 
        pattern={pattern} 
        required
      >
      </input>
    </label>
  )

}

export default Input