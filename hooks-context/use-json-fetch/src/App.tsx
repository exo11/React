import useJsonFetch from '../hooks/useJsonFetch'
import './App.css'

function App() {

  const opts = JSON.stringify({method:'GET'})
  const [data] = useJsonFetch('http://localhost:7070/data', opts) 
  //const [data] = useJsonFetch('http://localhost:7070/error', opts)
  //const [data] = useJsonFetch('http://localhost:7070/loading', opts)
  
  return (
    <>
      <div>
        <h4>{String(data.data)}</h4>
        <h4>{String(data.loading)}</h4>
        <h4>{String(data.error)}</h4>
      </div>
    </>
)

}

export default App
