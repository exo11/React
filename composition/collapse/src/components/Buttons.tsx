interface IButtons {
  onClick: (evt:  React.MouseEvent) => void,
  collapsedLabel?: string,
  expandedLabel?: string
}

function Buttons({onClick, collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть'}: IButtons) {
  
  return (
    <p>
      <button className="btn btn-primary" type="button" data-action="true" onClick={onClick}>{collapsedLabel}</button>
      <button className="btn btn-primary" type="button" data-action="false" onClick={onClick}>{expandedLabel}</button>
    </p>
  )

}

export default Buttons