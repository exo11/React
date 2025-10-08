import moment from 'moment/min/moment-with-locales'

const upperFirst = str => str.charAt(0).toUpperCase() + str.substr(1)

function Calendar({date}) {

  const dt = moment(date)
  const firstMonthDate = moment(date).startOf('month')
  const startDate = moment(firstMonthDate).isoWeekday(1)
  const monthStr = dt.locale('ru').format('LL').match(/\s(.*?)\s/g)[0]
  let count = 0;
  
  const addClass = num => (num.month() !== dt.month()) ? 
    'ui-datepicker-other-month' : (num.date() === dt.date()) ? 
      'ui-datepicker-today' : ''
    
  const addDay = () => {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      let num = moment(startDate).add(count, 'days')
      arr.push(
        <td key={`day_${count}`} className={addClass(num)}>{num.date()}</td>
      )
      count++
    }
    return arr
  }

  const addWeek = () => {
    const arr = [];
    const day = firstMonthDate.isoWeekday()
    const week = (day === 7 || day === 6) ? 6 : 5
    for (let i = 0; i < week; i++) {
      arr.push(<tr key={`week_${i}`}>{addDay()}</tr>)
    }
    return arr
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{upperFirst(dt.locale('ru').format('dddd'))}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{dt.date()}</div>
          <div className="ui-datepicker-material-month">{monthStr}</div>
          <div className="ui-datepicker-material-year">{dt.year()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{dt.locale('ru').format('MMMM')}</span>&nbsp;
          <span className="ui-datepicker-year">{dt.year()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col className="ui-datepicker-week-end"></col>
          <col className="ui-datepicker-week-end"></col>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {addWeek()}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar