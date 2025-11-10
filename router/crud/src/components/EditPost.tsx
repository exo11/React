import { useState } from 'react'
import useNewPost from '../hooks/useNewPost'
import Form from './Form'
import Toolbar from './ToolBar'
import Btn from './Btn'
import Close from './Close'
import { type IPost } from '../model/model'
import { type SinglePostProps } from '../model/model'

function EditPost({id, content, onSwitch}: SinglePostProps) {

  const [post, setPost] = useState<IPost | null>(null)
  
  useNewPost({post, setPost, method: 'PUT'})
  
  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    const {newPost} = evt.target as HTMLFormElement
    setPost({id: Number(id), content: newPost.value})
  }

  return (
    <div className="create-container">
      <Form onSubmit={onSubmit} value={String(content)}>
        <Close onClick={onSwitch} cls={'edit-close'}/>
        <Toolbar>
          <Btn title={'Save'}/>
        </Toolbar>
      </Form>
    </div>
  )

}

export default EditPost