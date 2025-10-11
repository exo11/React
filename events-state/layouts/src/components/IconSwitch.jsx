function IconSwitch({icon, onSwitch}) {

  return(
    <div className="icon-container">
      <button className="icon-btn" onClick={onSwitch}>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  )

}

export default IconSwitch