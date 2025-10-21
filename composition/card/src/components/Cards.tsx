import Card from './Card'
import CardBody from './CardBody'
import { type IData } from '../model/model'

const data: IData = {
  title: 'Заголовок карточки',
  text: 'Небольшой пример текста, который должен основываться на названии карточки и составлять основную часть содержимого карты.',
  url: '../src/image/image.jpg',
  btn: {href:'#', text: 'Перейти куда-нибудь'}
}

function Cards() {
  
  return (
    <Card url={data.url}>
      <CardBody {...data}/>
    </Card>
  )

}

export default Cards