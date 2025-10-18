import { useState } from 'react';
import Preview from './Preview'
import Input from './Input'
import { type ChangeEvent } from 'react'
import { type MouseEvent } from 'react'

function Photo() {

  const [state, setState] = useState <Set<string>>(new Set())

  const fileToDataUrl = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
  
      fileReader.addEventListener('load', evt => {
        resolve((evt.currentTarget as FileReader).result)
      });
    
      fileReader.addEventListener('error', evt => {
        const error = (evt.currentTarget as FileReader).error
        reject(new Error((error as DOMException).message))
      })
    
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt: ChangeEvent): Promise<void> => {
    const target = (evt.target as HTMLInputElement)
    const files = Array.from(target.files as ArrayLike<File>)
    const urls = await Promise.all(files.map(o => fileToDataUrl(o))) as string[]
    setState(new Set([...state, ...urls]))
  }

  const deletePreview = (evt: MouseEvent): void => {
    const id = (evt.target as HTMLButtonElement).dataset.id
    state.delete(id as string)
    setState(new Set(state))
  }

  const addPreview = (arr: string[]) => {
    return arr.map((url: string, i: number) => {
      return (
        <div key={i} className="preview">
          <Preview url={url} onClick={deletePreview}/>
        </div>
      )
    })
  }

  return (
    <div>
      <Input onChange={handleSelect}/>
      <div className="preview-container">
        {addPreview([...state])}
      </div>
    </div>
  )

}

export default Photo

