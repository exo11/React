import { Link } from 'react-router'
import Post from './Post'
import { type IPost } from '../model/model'


function Posts({posts} : {posts: IPost[]}) {

  const addPosts = (arr: IPost[]) => arr.map((obj) => {
    return (
      <Link key={obj.id} to={`/posts/${obj.id}`}>
        <Post content={obj.content} created={obj.created}/>
      </Link>
    )
  })
  
  return (
    <div className="posts-container">{addPosts(posts)}</div>
  ) 

}

export default Posts

