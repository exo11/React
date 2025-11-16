import { type IObj } from '../model/model'

function Inputs({id, name, price}: IObj) {

  return (
    <div>
      <label>
        <input 
          type="hidden" 
          name="serviceId" 
          defaultValue={id}>
        </input>
      </label>
      <label>  
        <input 
          type="text" 
          placeholder="SERVICE" 
          name="service" 
          defaultValue={name} 
          key={name} 
          required>
        </input>
      </label>
      <label>
        <input 
          type="text" 
          placeholder="PRICE" 
          name="price" 
          defaultValue={price} 
          key={price} 
          required>
        </input>
      </label>
    </div>
  )

}

export default Inputs