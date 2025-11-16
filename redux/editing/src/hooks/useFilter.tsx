import { useEffect } from 'react'
import { useState } from 'react'
import { type IObj } from '../model/model'

function useFilter(arr: IObj[], filter: string) {

  const [state, setState] = useState<IObj[]>(arr)

  useEffect(() => {
    
    if (arr && filter) {
      const items = arr.filter(({name}) => {
        const data = name.split(' ')
        return data.find((str) => str.toLowerCase().includes(filter))
      })
      setState(items)
    } else if (arr) {
      setState(arr)
    }
  
  }, [arr, filter])

return state

}

export default useFilter