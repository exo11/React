import List from './component/List'
import './App.css'

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'

function App() {

  return (
    <List url={url}/>
  )

}

export default App
