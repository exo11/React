import { useState, useEffect } from 'react'
import { type SetStateAction } from 'react'
import { type IAuth } from '../model/model'

type SA = React.Dispatch<SetStateAction<IAuth | null>>

function useTokenQuerry(auth: IAuth | null, setAuth: SA) {

  const [token, setToken] = useState<string | null>(null)
  
  useEffect(() => {

    if (auth) {
      const headers = { 'Content-Type': 'application/json' }
      const options = {method: 'POST', headers, body: JSON.stringify(auth)}
      fetch('http://localhost:7070/auth', options) 
        .then(res => res.ok ? res.json() : console.error(res.status)) 
        .then((obj) => {
          setToken(obj.token)
          setAuth(null)
        })
        .catch(err => console.error(err))
    }  
  
  }, [auth, setAuth])
  
  return [{token, setToken}]

}

export default useTokenQuerry