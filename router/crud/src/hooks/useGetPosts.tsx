import { useState } from 'react'
import { useEffect } from 'react'

function useGetPosts() {

const [posts, setPosts] = useState([])

useEffect(() => {
  fetch('http://localhost:7070/posts')
    .then(res => res.ok ? res.json() : console.error(res.status))
    .then(arr => setPosts(arr))
    .catch(err => console.error(err))
}, [])

return posts

}

export default useGetPosts
 
 