import React,{useEffect, useState} from 'react'
import Table from '../TableComp';
import { Ajax } from '../Apis/ajax';
const Student = () => {
  const [data,setData]=useState([])
 

 const fnStudentTable=async ()=>{
  try{
    Ajax.fnsendGetReq("https://localhost:5000/getStudents")
 .then((res)=>{
  setData(res.data)
 })
 .catch((res)=>{
  console.log("catch",res)
 })
 .finally(()=>{})
 console.log("executed")
  }            
  catch(ex){
    console.error("student_"+ex)
  }
  finally{
    console.log("executed")
  }
 }
useEffect(()=>{
  
  fnStudentTable()
},[])
  

  return (
    <div>
    <div style={{textAlign:'center',fontSize:'50px'}}><u><b>Student Data</b></u></div>
    <Table  headers = {["NAME","AGE","GRADE"]} columns={["sname","age","grade"]} data={data}/>
    </div>

  )
}

export default Student
