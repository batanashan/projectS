import React, { useState } from 'react'
import {Input} from '../../Components/InputCom/Input'
import  inputControls from "./configuration.json"
import { Ajax } from '../../Apis/ajax'
export const SaveStd = () => {
 
  const [inputControl,setInputControl] = useState(inputControls)


  const fnField=(eve,inputControl)=>{

    const {value,id}=eve.target;
    console.log(id,value)
    let _data=[...inputControl]
    const inputControlObj=_data.find((obj)=>{
      return obj.id===id;
     })
     inputControlObj.isShownErr=value?false:true;
     inputControlObj.value=value;
     return _data;
    
  }
  const fnChange=(eve)=>{
const cloneInput = fnField(eve,inputControl)
    
     setInputControl(cloneInput)
    
  }
  const fnStdClick=()=>{
    let isStdValid = true;
    let objStd = {};
    let _data = [...inputControl];
    _data.forEach((obj)=>{
objStd[obj.name]=obj.value;
if(!obj.value){
  isStdValid=false;
  obj.isShownErr=true;
}
})
if(!isStdValid){
  setInputControl(_data)
}

    Ajax.fnsendPostReq("http://localhost:5000/addStudent",{ data:objStd },{ timeout: 4000 })
    .then((res)=>{
console.log("then",res)
    })
    .catch((res)=>{
console.log("catch",res)
    })
    .finally((res)=>{
console.log("finally",res)
    })
  }
  
  return <div>
   
    {
    inputControl.map((obj,ind)=>{
      return <Input  key={`inp_${ind}`} {...obj} fnChange={fnChange}/>
    })}
    
<div style={{textAlign:'center'}}><button className='btn btn-primary ' onClick={fnStdClick}>Save</button></div>
   
  </div>
}
