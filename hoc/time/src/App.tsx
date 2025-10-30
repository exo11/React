import { useEffect, useState, type ReactNode } from 'react'
import moment from 'moment'
import './App.css'

interface IList {url: string, date: string}
interface IPretty {Component: (props: {date: string}) => ReactNode, date: string}

function DateTime(props: {date: string}) {
  return (
    <p className="date">{props.date}</p>
  )
}

function DateTimePretty({Component, date} : IPretty) {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const diff = moment().diff(moment(date), 'minute')
    const str = diff > 1440 ? 'x дней назад' :
      diff > 60 ? '5 часов назад' : '12 минут назад'
    setMessage(str)
  }, [date])
  
  return <Component date={message}/>
}

function Video(props: IList) {
  return (
    <>
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty Component={DateTime} date={props.date}/>
    </>
  )
}

function VideoList(props: {list: IList[]}) {
  return props.list.map((item, key) => {
    return (
      <div className="video" key={key}>
        <Video url={item.url} date={item.date}/>
      </div>
    )
  })
}

function App() {
  const [list] = useState<IList[]>([
    {url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0', date: '2025-10-30 01:25:00'},
    {url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0', date: '2025-10-29 12:10:00'},
    {url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0', date: '2018-02-03 23:16:00'},
    {url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0', date: '2018-01-03 12:10:00'},
    {url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0', date: '2018-01-01 16:17:00'},
    {url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0', date: '2017-12-02 05:24:00'}
  ])

  return (
    <VideoList list={list}/>
  )
}

export default App