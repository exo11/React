import Message from './Message'
import Response from './Response'
import Typing from './Typing'
import { type IMessage } from '../../model/model'

function MessageHistory({list = []}: {list: IMessage[]}) {

  const addMessage = (arr: IMessage[]) => {
    return arr.map((obj: IMessage) => {
      
      const node = obj.type === 'message' ? <Message message={obj}/> :
        obj.type === 'response' ? <Response message={obj}/> : 
          <Typing message={obj}/>
      
      return (<li className="clearfix" key={obj.id}>{node}</li>)
    })
  }
  
  return (
    <ul>
      {addMessage(list)}
    </ul>
  )

}

export default MessageHistory