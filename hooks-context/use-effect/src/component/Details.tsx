import { useEffect, useState } from "react"

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'

interface IDetails{
  city: string, 
  company: string, 
  position: string
}

interface IUser {
  id: number,
  name: string,
  avatar: string,
  details: IDetails
}

function Details({id}: {id: number | null}) {

  const [user, setUser] = useState()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (id) {
      setLoad(true)
      fetch(url + id + '.json')
        .then(res => res.ok ? res.json() : console.error(res.status))
        .then(obj => {
          setUser(obj)
          setLoad(false)
        })
        .catch(err => console.error(err))
    }  
  }, [id])

  const details = (user: IUser) => {
    const {name, avatar, details} = user
    const {city, company, position} = details
    return (
      <>
        <img src={avatar} alt={`${name} avatar`}></img>
        <h4>{name}</h4>
        <p>city: {city}</p>
        <p>company: {company}</p>
        <p>position: {position}</p>
      </>
    )
  }

  const loading = (<div className="loading"><span>Loading...</span></div>)

  return (
    <div className="details">
      {load ?  loading : user ? details(user) : null}
    </div>
  )

}

export default Details