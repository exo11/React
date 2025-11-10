import { type FormProps } from '../model/model'

function Form({children, value='', onSubmit, onChange}: FormProps) {

  return (
    <form onSubmit={onSubmit}>
      <textarea onChange={onChange} name="newPost" defaultValue={value} required></textarea>
      {children}
    </form>
  )

}

export default Form