import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { type SI } from '../model/model'

function useDeletePost(id: string | null, setId: SI) {

  const navigate = useNavigate()

  useEffect(() => {
     if (id) {
      fetch('http://localhost:7070/posts/' + id, {method: 'DELETE'}) 
        .then(res => {
          if (res.ok) {
            setId(null)
            navigate('/')
          } else {
            console.error(res.status)
          }
        }) 
        .catch(err => console.error(err)) 
    }
  }, [id, setId, navigate])

}

export default useDeletePost