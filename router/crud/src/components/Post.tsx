import UserBlock from './UserBlock'

function Post({content, created}: {content: string, created: number | undefined}) {

  return (
    <div className="post">
      <UserBlock created={created}/>
      <p>{content}</p>
    </div>
  )

}

export default Post