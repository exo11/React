import { useState, type ReactNode } from 'react'
import './App.css'

interface IList {
  type: string, 
  url?: string, 
  title?: string, 
  views: number
}

interface HocItemProp {Component: (props: IList) => ReactNode, item: IList}

function New(props: {children: ReactNode}) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
}

function Popular(props: {children: ReactNode}) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
}

function HocItem({Component, item}: HocItemProp) { 
  const{views} = item
  if (views < 100) {
    return (
      <New>
        <Component {...item}/>
      </New>
    )
  } else if (views > 999) {
    return (
      <Popular>
        <Component {...item}/>
      </Popular>
    )
  } else {
    return (
      <Component {...item}/>
    )
  }
}

function Article(props: IList) {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}

function Video(props: IList) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

function List(props: {list: IList[]}) {
  return props.list.map((item, key) => {
    switch (item.type) {
      case 'video':
        return (
          <div key={key}>
            <HocItem Component={Video} item={item}/>
          </div>
        )
      case 'article':
        return (
          <div key={key}>
            <HocItem Component={Article} item={item}/>
          </div>
        )
    }
  })
}

export default function App() {
  const [list] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12
    }
  ])

  return (
    <List list={list} />
  )
}