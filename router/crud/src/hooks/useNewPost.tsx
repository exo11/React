import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { type UNP } from '../model/model'

function useNewPost(obj: UNP) {
  const {post, setPost, method = 'POST'} = obj
  const navigate = useNavigate()

  useEffect(() => {
    
    if (post) {
      const headers = { 'Content-Type': 'application/json' }
      const host = 'http://localhost:7070/posts'
      const url = method === 'POST' ? host : host + `/${post.id}`
      const options = {method, headers, body: JSON.stringify(post)}
      
      const refresh = (method: 'POST' | 'PUT') => {
        if (method === 'POST') {
          localStorage.removeItem('post')
          navigate('/')
        } else {
          navigate(`/`, {replace: true})
          setTimeout(() => {navigate(`/posts/${post.id}`)}, 10)
        }
      }
      
      fetch(url, options)
        .then(res => {
          if (res.ok) {
            setPost(null)
            refresh(method)
          } else {
            console.error(res.status)
          }})
        .catch(err => console.error(err))
    }
  
  }, [post, setPost, navigate, method])

}

 export default useNewPost