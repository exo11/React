import { useState, useEffect } from 'react'
import { type SetStateAction } from 'react'
import { type IAuth } from '../model/model'
import { type IUser } from '../model/model'

type SA = React.Dispatch<SetStateAction<IAuth | null>>

function useProfileQuerry(auth: IAuth | null, setAuth: SA) {

  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {

    if (auth) {
      
      const profileQuerry = (token: string) => { 
        const headers = {headers: {'Authorization': `Bearer ${token}`}}
        fetch('http://localhost:7070/private/me', headers)
          .then(res => res.ok ? res.json() : console.error(res.status))
          .then(profile =>  {
            profile.token = token
            localStorage.setItem('user', JSON.stringify(profile))
            setUser(profile)
            setAuth(null)
          }) 
          .catch(err => console.error(err)) 
      }    
      
      const tokenQuerry = () => {
        const headers = { 'Content-Type': 'application/json' }
        const options = {method: 'POST', headers, body: JSON.stringify(auth)}
        fetch('http://localhost:7070/auth', options) 
          .then(res => res.ok ? res.json() : console.error(res.status)) 
          .then(({token}) => profileQuerry(token))
          .catch(err => console.error(err))
      }
      
      tokenQuerry()
    }  
  
  }, [auth, setAuth])
  
  return [{user, setUser}]

}

export default useProfileQuerry