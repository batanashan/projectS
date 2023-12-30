import React from "react";
 const Table = (props)=>{
const {headers,data,columns}=props;
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
{columns.map((val,ind)=>{
return <td key={`td_${ind}`}>{obj[val]}</td>
})}
         </tr>
    })
  }
</tbody>
</table>
}
export default Table;