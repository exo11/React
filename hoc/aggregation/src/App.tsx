//import { Component } from 'react'
import { useEffect, useState, type ReactNode } from 'react'
import moment from 'moment'
import './App.css'

interface IDate {
  date?: string, 
  month?: string, 
  year?: string, 
  amount: number
}

interface ChangedateProps {
  Component: (props: {list: IDate[]}) => ReactNode, 
  data: IDate[],
  type?: 'month' | 'year' | 'date'
}

function MonthTable(props: {list: IDate[]}) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tbody>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, key) => (
          <tr key={key}>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

function YearTable(props: {list: IDate[]}) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tbody>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, key) => (
          <tr key={key}>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

function SortTable(props: {list: IDate[]}) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tbody>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, key) => (
          <tr key={key}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

function ChangeDate({Component, data, type = 'date'}: ChangedateProps) {
  const [state, setState] = useState<IDate[]>([])
 
  useEffect(() => {
    let arr: IDate[] = []
    
    if (type === 'date') {
      
      const sortDate = (a: IDate, b: IDate): number => {
        const momentA: number = moment(a.date).unix()
        const momentB: number = moment(b.date).unix()
        return momentB - momentA
      }
      
      arr = [...data].sort(sortDate)
    
    } else {
      
      arr = [...data].map((item) => {
        const {date, amount} = item
        const format = moment(date).format(type === 'month' ? 'MMM' : 'YYYY')
        return {[type]: format, amount}
      })
    
    }
    
    setState(arr)
  }, [data, type])
  
  return (
    <Component list={state}/>
  )
}

function App({url}: {url: string}) {

  const[state, setState] = useState([])

  useEffect(() => {
    fetch(url)
     .then(res => res.ok ? res.json() : console.error(res.status))
     .then(obj=> setState(obj.list))
     .catch(err => console.error(err))
  }, [url])

  return (
    <div id="app">
      <ChangeDate Component={MonthTable} data={state} type={'month'}/>
      <ChangeDate Component={YearTable} data={state} type={'year'}/>
      <ChangeDate Component={SortTable} data={state}/>
    </div>
  )
}

/*

class App extends Component<{url: string}> {
  
  state = {
    list: []
  }
  
  componentDidMount(): void {
    fetch(this.props.url)
     .then(res => res.ok ? res.json() : console.error(res.status))
     .then(obj=> this.setState(obj))
     .catch(err => console.error(err))
  }

  render() {
    const {list} = this.state
    return (
      <div id="app">
        <ChangeDate Component={MonthTable} data={list} type={'month'} />
        <ChangeDate Component={YearTable} data={list} type={'year'} />
        <ChangeDate Component={SortTable} data={list} />
      </div>
    )
  }
}

*/

export default App