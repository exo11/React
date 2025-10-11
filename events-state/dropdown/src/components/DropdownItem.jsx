function DropdownItem({options, active}) {
 
  const addOptions = (arr)=> {
    return arr.map((option, i) => {
      let style = i === Number(active) ? {color: '#5380F7'} : {}
      return (
        <li key={`option_${i}`}>
          <a href="#" data-id={i} style={style}>{option}</a>
        </li>
      ) 
    })
  }
  
  return (
    <>{addOptions(options)}</>
  )

}

export default DropdownItem