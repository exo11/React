import { useEffect } from 'react'
import { type SI } from '../model/model'

function useLocalSave(save: string | null, setSave: SI) {
  
  useEffect(() => {
    if (save) {
      localStorage.setItem('post', save)
      setSave(null)
    }
  }, [save, setSave])

}

export default useLocalSave