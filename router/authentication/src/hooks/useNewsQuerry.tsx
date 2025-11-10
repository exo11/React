import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { type IUser } from '../model/model'
import { type INews } from '../model/model'

function useNewsQuerry(user : IUser | null) {

  const [news, setNews] = useState<INews[]>([])
  const navigate = useNavigate()

  useEffect(() => {

    if (user) {
      const logout = () => {
        localStorage.removeItem('user')
        navigate('/')
      }
      const headers = {headers: {'Authorization': `Bearer ${user.token}`}}
      
      fetch('http://localhost:7070/private/news', headers)
        .then(res => {
          if (res.status === 401) logout()
          return res.ok ? res.json() : console.error(res.status)
        })
        .then(news => setNews(news)) 
        .catch(err => console.error(err)) 
    } else {
      navigate('/')
    }
  
  }, [user, navigate])
  
  return [news]

}

export default useNewsQuerry   