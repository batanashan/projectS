import React from "react";
 const TableCo = (props)=>{
const {headers,data}=props;
return <table className="table table-bordered">
<thead>
  <tr>
    {headers.map((val,ind)=>{
return <th key={`th_${ind}`}>{val}</th>
    })}
  </tr>
</thead>
<tbody>
  {
    data.map((obj,ind)=>{
         return <tr key={`tr_${ind}`}>
<td>{obj.sno}</td>
<td>{obj.name}</td>
<td>{obj.age}</td>
<td>{obj.grade}</td>
<td className="text-center"><button className="btn btn-primary ">{obj.update}</button></td>
<td className="text-center"><button className="btn btn-primary">{obj.delete}</button></td>
         </tr>
    })
  }
</tbody>
</table>
}
export default TableCo;