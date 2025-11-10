import { useEffect } from 'react'
import { useState } from 'react'


function useTimeAgo(created: number) {

  const [time, setTime] = useState<string | null>(null)
 
  useEffect(() => {
    
    const now = new Date()
    const min = (Number(now) - created) / 60000
    const minute = min < 1 ? 1 : min
    const hour = min / 60
    const addStr = (num: number, str: string) => `posted ${Math.round(num)} ${str} ago`
    const timeStr = hour >= 1 ? addStr(hour, 'hours') : addStr(minute, 'min')
    setTime(timeStr)

  }, [created])

  return time

}

export default useTimeAgo