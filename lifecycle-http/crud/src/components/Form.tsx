function Form({onSubmit}: {onSubmit: (evt: React.FormEvent) => void}) {

  return (
    <form onSubmit={onSubmit}>
      <textarea name="content" required></textarea>
      <button className="btn form-btn">
        <span className="material-icons">play_arrow</span>
      </button>
    </form>
  )

}

export default Form