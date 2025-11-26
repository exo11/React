function ErrorModal({id, onClick}) {

  return (
    <div className="error">
      <h4>Произошла ошибка!</h4>
      <button data-id={id} onClick={onClick}>Повторить запрос</button>
    </div>
  )

}

export default ErrorModal