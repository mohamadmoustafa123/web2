import React, { useState } from 'react'

function Signin() {
    const [name,SetName]=useState("");
    const [password,SetPassord]=useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault();
       console.log("Name:",name);
       console.log("Password:",password);
    }


  return (
    <div>
       <div>        
        <h1>welcome</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name" >Name:</label>
        <input type="text"  id='name' value={name} placeholder='enter your name' />

         <label htmlFor="email">Email:</label>
        <input type="email" id='email' value={password} placeholder='enter your name' />

         <label htmlFor="password">Password:</label>
        <input type="email" id='password' placeholder='enter your name' />

        <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Signin
