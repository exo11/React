import { useState } from 'react'
import useLocalSave from '../hooks/useLocalSave'
import useNewPost from '../hooks/useNewPost'
import Form from '../components/Form'
import Toolbar from '../components/ToolBar'
import Btn from '../components/Btn'
import Close from '../components/Close'
import { type IPost } from '../model/model'


function CreatePage1() {

  const [post, setPost] = useState<IPost | null>(null)
  const [save, setSave] = useState<string | null>(null)
  
  const value = localStorage.getItem('post') || undefined
 
  useNewPost({post, setPost})
  useLocalSave(save, setSave)

  const onChange = (evt: React.ChangeEvent) => {
    setSave((evt.target as HTMLTextAreaElement).value)
  }
  
  const onSubmit = (event: React.FormEvent) => { 
    event.preventDefault()
    const {newPost} = event.target as HTMLFormElement
    setPost({id: 0, content: String(newPost.value)})
  }

  return (
    <div className="create-container">
      <Form onSubmit={onSubmit} onChange={onChange} value={value}>
        <Close link={'/'}/>
        <Toolbar>
          <Btn title={'Publish'}/>
        </Toolbar>
      </Form>
    </div>
  )

}

export default CreatePage1