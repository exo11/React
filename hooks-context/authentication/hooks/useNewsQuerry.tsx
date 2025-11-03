import { useState, useEffect } from 'react'
import { type SetStateAction } from 'react'
import { type IUser } from '../model/model'
import { type INews } from '../model/model'

type SU = React.Dispatch<SetStateAction<IUser | null>>

function useNewsQuerry(user: IUser | null, setUser: SU) {

  const [news, setNews] = useState<INews[]>([])

  useEffect(() => {

    const profile = localStorage.getItem('user')
    if (!user && profile) setUser(JSON.parse(profile as string))

    if (user) {
      const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
      }
      const headers = {headers: {'Authorization': `Bearer ${user.token}`}}
      
      fetch('http://localhost:7070/private/news', headers)
        .then(res => {
          if (res.status === 401) logout()
          return res.ok ? res.json() : console.error(res.status)
        })
        .then(news => setNews(news)) 
        .catch(err => console.error(err)) 
    }
  
  }, [user, setUser])
  
  return [news]

}

export default useNewsQuerry   