import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { type IPost } from '../../model/model'

 
function usePost() {
  
  const [content, setContent] = useState(null)
  const {id} = useParams()
  
  useEffect(() => {

    if (id) {
      fetch('http://localhost:7070/posts')
        .then(res => res.ok ? res.json() : console.error(res.status))
        .then(posts => posts.find((o: IPost) => Number(o.id) === Number(id)))
        .then(post => setContent(post.content))
        .catch(err => console.error(err))
    }
  
  }, [id])
 
  return {content, id}

}

export default usePost