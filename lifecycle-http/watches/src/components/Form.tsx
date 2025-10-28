interface FormProps {onSubmit: (evt: React.FormEvent) => void}

function Form({onSubmit}: FormProps) {

  return (
    <form className="time-form d-flex" onSubmit={onSubmit}>
      <input 
        className="form-control me-2" 
        name="title" 
        type="text" 
        placeholder="Название"
        required
      >
      </input>
      <input 
        className="form-control me-2" 
        name="zone"
        type="text" 
        placeholder="Временная зона"
        pattern="[+\-]?[0-9]+"
      >
      </input>
      <button className="btn btn-outline-secondary" type="submit">Добавить</button>
    </form>
  )

}

export default Form