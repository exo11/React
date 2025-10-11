function Toolbar({filters, selected, onSelectFilter}) {

  const addBtn = (arr, sl) => {
    return arr.map((item, i) => {
      return (
        <button 
          key={`btn_${i}`}
          className={`btn ${item === sl ? 'select-btn' : ''}`} 
          data-filter={item}>
          {item}
        </button>
      )
    })
  }
  
  return (
    <div className="btn-container" onClick={onSelectFilter}>
      {addBtn(filters, selected)}
    </div>
  )
}

export default Toolbar