import React, { useState } from 'react'

const User = (props) => {
    const[count,setcount]=useState(0);
  return (
    <div>
       <h3>count = {count}</h3>
       <button onClick={()=>{}} >count inc</button>
      <h1>Name: {props.name} </h1>
      <h2>City: {props.city}</h2>
      
    </div>
  )
}

export default User
