import Input from './Input'
import { type FormEvent } from 'react'


function Form({onSubmit}: {onSubmit: (evt: FormEvent) => void}) {

  return (
    <form id="steps" action="" onSubmit={onSubmit}>
      <Input 
        label="Дата (ДД.ММ.ГГГГ)" 
        name="date" 
        pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}"
      />
      <Input 
        label="Пройдено КМ" 
        name="distance" 
        pattern="^\d+$"
      /> 
      <button type="submit" form="steps">ОК</button>
    </form>
  )

}

export default Form