import { type IMessage } from '../../model/model'

function Response({message}: {message: IMessage}) {

  const {from, time, text} = message

  return (
    <>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </>
  )

}

export default Response