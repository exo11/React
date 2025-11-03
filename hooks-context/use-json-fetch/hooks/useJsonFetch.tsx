import { useState, useEffect} from 'react'

interface IOpts { 
  method: string, 
  headers?: { 'Content-Type': string }, 
  body?: BodyInit | null | undefined
}

function useJsonFetch(url: string, opts: string) {

  const [data, setData] = useState()
  const [loading, setLoad] = useState(false)
  const [error, setError] = useState(null)

  const _throw = (res: Response) => { throw new Error(res.statusText)}
  
  useEffect(() => {
    
    setLoad(true)
    const obj: IOpts = JSON.parse(opts)
    
    fetch(url, obj)
      .then(res => res.ok ? res.json() : _throw(res))
      .then(data => {
        setData(data)
        setLoad(false)
      })
      .catch(err => {
        setError(err)
        setLoad(false)
      })
  
  }, [url, opts])
  
  return [{data, loading, error}]

}

export default useJsonFetch