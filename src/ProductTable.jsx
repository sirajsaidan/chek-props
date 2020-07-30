import React from "react"
export default (props)=>
<div className="row justify-content-center">
<table className="table table-dark col-6 " >
<thead>
  <tr>
    
    <th style={{fontSize:30,
        color:"red"}}scope="col">NAME</th>
    <th style={{fontSize:30,
        color:"red"}}scope="col">PRICE</th>
    <th style={{fontSize:30,
        color:"red"}} scope="col">CATEGORY</th>
  </tr>
</thead>
<tbody>
  
  {props.products.map(e=>
  <tr>
    <td>{e.nom}</td>
    <td>{e.price}</td>
    <td>{e.category}</td>
  </tr>)}
 
</tbody>
</table>
</div>