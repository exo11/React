function Input({name}: {name: string}) {

  return (
    <input type="text" name={name} placeholder={name.toUpperCase()} required></input>
  )


}

export default Input