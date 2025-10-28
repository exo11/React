import moment from 'moment'
import { useState, useEffect } from 'react'

interface WatchProps {
  id: string,
  title: string, 
  zone: string,
  onClick: (evt: React.MouseEvent) => void
}

function Watch({title, zone, id, onClick}: WatchProps) {
  
  const addOffset = (zone: string) => {
    return moment().utcOffset(Number(zone))
  }
  
  const [time, setTime] = useState<moment.Moment>(addOffset(zone))
  
  useEffect(() => {
    const interval = setInterval(() => {setTime(addOffset(zone))}, 1000) 
    return () => {clearInterval(interval)}
  }, [zone]) 

  const sec = time.second() * 6
  const min = time.minute() * 6
  const hour = (time.hour() * 30) + min / 12

  return (
    <>
      <div>{title}</div>
        <div className="watch">
          <div className="hour" style={{transform:`rotateZ(${hour}deg)`}}></div>
          <div className="minute"style={{transform: `rotateZ(${min}deg)`}}></div>
          <div className="second" style={{transform: `rotateZ(${sec}deg)`}}></div>
        </div>
      <button data-id={id} onClick={onClick}>
        <span className="material-icons">close_small</span>
      </button>
    </>
  )

}

export default Watch
