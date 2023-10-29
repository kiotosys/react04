import React from 'react'
import AppForm from './AppForm';


const AppLista = (props) => {

  //style={{background:"greenyellow", padding:"10px"}}
  //{/* Pasa variable y función */} {...{idActual, setIdActual}}
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
      <h1>AppList.js</h1>
      <AppForm />
      <h3>Lista de clientes</h3>
      <p>No. 1. Juan Manuel Ticona Vega  ..... x ...... A</p>
      <p>No. 2. Rosa Maria Luque Conde   ..... x ...... A</p>
      <p>No. 3. Joe Ricardo Lopez Moral  ..... x ...... A</p>
    </div>    
  )
}

export default AppLista;





/*
{
  docBD.map((row, index) =>
    <p key={row.id}>       
      {index+1}. {row.nombre} ..... 
      <span onClick={() => fnDelete(row.id)}>x</span>
      .....
      <span onClick={() => setIdActual(row.id)}>A</span>
    </p> 
  )
}
*/