import React from 'react'

import ListData from './configuration.json'

import TableCo from '../TableCo/Table'
export const RemoveStd = () => {
  return  <div>
    <TableCo  headers={["SNO","NAME","AGE","GRADE"]} data={ListData} />
  </div>
  
}
