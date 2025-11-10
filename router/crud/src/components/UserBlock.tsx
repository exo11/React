import useTimeAgo from '../hooks/useTimeAgo'

function UserBlock({created}: {created: number | undefined}) {

  const timeAgo = useTimeAgo(Number(created))

  return (
    <div className="user-container">
      <div className="avatar-wrapper">
        <img src="../src/assets/avatar.jpg" alt="avatar" ></img>
      </div>
      <div>
        <h4 className="user-title">IVAN IVANOV</h4>
        <p className="post-time">{timeAgo}</p>
      </div>
    </div>
  )

}

export default UserBlock