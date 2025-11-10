import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { type SetStateAction } from 'react'

type ST = React.Dispatch<SetStateAction<string | null>>

function useUserQuerry(token: string | null, setToken: ST) {

  const navigate = useNavigate()
 
  useEffect(() => {

    if (token) {
      const headers = {headers: {'Authorization': `Bearer ${token}`}}
      fetch('http://localhost:7070/private/me', headers)
        .then(res => res.ok ? res.json() : console.error(res.status))
        .then(user =>  {
          user.token = token
          localStorage.setItem('user', JSON.stringify(user))
          setToken(null)
          navigate('/news')
        }) 
        .catch(err => console.error(err)) 
    }   
  
  }, [token, setToken, navigate])

}

export default useUserQuerry