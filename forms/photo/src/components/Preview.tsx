import { type MouseEvent } from 'react'

interface PreviewProps {
  url: string, 
  onClick: (evt: MouseEvent) => void
}

function Preview({url, onClick}: PreviewProps) {

  return (
    <>
      <img src={url} alt="image"></img>
      <button className="btn" data-id={url} onClick={onClick}>
        <span className="material-icons">close_small</span>
      </button>
    </>
  )

}

export default Preview