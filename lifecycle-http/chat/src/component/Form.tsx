function Form({onSubmit}: {onSubmit: (evt: React.FormEvent) => void}) {

  return (
    <form onSubmit={onSubmit}>
      <textarea name="content" required></textarea>
      <button type="submit">SEND</button>
    </form>
  )

}

export default Form