import React from 'react'
import { Input } from '../../Components/InputCom/Input'
import inputControl from './configuration.json'
export const UpdateStd = () => {
  return  <div>
    {
        inputControl.map((obj,ind)=>{
            return    <Input key={`input_${ind}`} {...obj}/>
        })
    }
 
<div style={{textAlign:'center'}}><button className='btn btn-primary '>update</button></div>
  </div>
  
}
