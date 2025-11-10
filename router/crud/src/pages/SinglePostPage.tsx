import { useState } from 'react'
import { useParams } from 'react-router'
import useGetPosts from '../hooks/useGetPosts'
import SinglePost from '../components/SinglePost'
import EditPost from '../components/EditPost'
import { type IPost } from '../model/model'

function SinglePostPage() {

  const [view, setView] = useState<boolean>(true)
  
  const {id} = useParams()
  const posts: IPost[] = useGetPosts()
  const post: IPost | undefined = posts.find((o) => Number(o.id) === Number(id))
  
  const onSwitch = () => setView(prev => !prev)
  
  const props = {...post, onSwitch}
  const singleEdit = view ? <SinglePost {...props}/> : <EditPost {...props}/>
  
  return (
    <div className="container">
      {post ? singleEdit : null}
    </div>
  )

}

export default SinglePostPage