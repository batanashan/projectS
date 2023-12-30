import React from 'react'

export const Input = (props) => {
    const {label,type,name,id,fnChange,value,isShownErr,errorMsg} = props;
  return <div>
    <div className='row mb-1 mt-1'>
      <div className='col-sm-4 text-end'><b>{label}:</b></div> 
      <div className='col-sm-4 '><input  id={id} type={type} name={name} value={value} onChange={fnChange} className='form-control' /></div> 
        
      <div className='col-sm-4'> {isShownErr&&<span className='text-danger mx-4'>{errorMsg}</span>}</div>
    </div>
  </div>
}
