import { useState } from 'react'
import useDeletePost from '../hooks/useDeletePost'
import Post from './Post'
import Toolbar from './ToolBar'
import Btn from './Btn'
import { type SinglePostProps } from '../model/model'

function SinglePost(props: SinglePostProps) {
  
  const {id, content, created, onSwitch} = props
  const [deleteId, setDeleteId] = useState<string | null>(null)
  
  useDeletePost(deleteId, setDeleteId)

  const onDelete = () => setDeleteId(String(id))

  return (
    <div className="post-wrapper">
      <Post content={String(content)} created={created}/>
      <Toolbar>
        <Btn title={'Change'} cls={'change-btn'} onClick={onSwitch}/>
        <Btn title={'Delete'} onClick={onDelete}/>
      </Toolbar>
    </div>
  )

}

export default SinglePost