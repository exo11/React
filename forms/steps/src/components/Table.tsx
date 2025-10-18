import Row from './Row'
import moment from 'moment'
import { type IData } from '../../model/model'
import { type TableProps } from '../../model/model'

function Table({data, onDelete, onEdit}: TableProps) {

  const addRow = (data : IData[]) => {
    
    const sortDate = (a: IData, b: IData): number => {
      const momentA: number = moment(a.date, 'DD.MM.YYYY').unix()
      const momentB: number = moment(b.date, 'DD.MM.YYYY').unix()
      return momentB - momentA
    }
    
    const arr = [...data].sort(sortDate)
    
    return arr.map((item: IData) => {
      return (
        <div key={item.date} className="row">
          <Row 
            data={item} 
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      )
    })
  
  }
  
  return (
    <div>
      <div className="title-container">
        <p>Дата (ДД.ММ.ГГГГ)</p>
        <p>Пройдено КМ</p>
        <p>Действия</p>
      </div>
      <div className="row-container">
        {addRow(data)}
      </div>
    </div>
  )

}

export default Table