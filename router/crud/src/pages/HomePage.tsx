import useGetPosts from '../hooks/useGetPosts'
import Toolbar from '../components/ToolBar'
import Btn from '../components/Btn'
import Posts from '../components/Posts'

function HomePage() {

  const posts = useGetPosts()

  return (
    <div className="container">
      <Toolbar>
        <Btn link={'/posts/new'} title={'Create Post'}/>
      </Toolbar>
      <Posts posts={posts}/>
    </div>
  )

}

export default HomePage