import { type IMessage } from '../../model/model'

function Typing({message}: {message: IMessage}) {

  const {from, time} = message

  return (
    <>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <i className="fa fa-circle online"></i>
      <i className="fa fa-circle online"></i>
      <i className="fa fa-circle online"></i>
    </>
  )

}

export default Typing