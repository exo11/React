import './App.css'
import messages from '../data/messageArr'
import MessageHistory from './components/MessageHistory'

function App() {

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>  
    </div>
  )

}

export default App
