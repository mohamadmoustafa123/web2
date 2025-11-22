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
        <input type="text"  id='name' value={name}  onChange={(e)=>SetName(e.target.value)} placeholder='enter your name' />
          
         <label htmlFor="email">Email:</label>
        <input type="email" id='email' value={password} placeholder='enter your Email' />

        
         <label htmlFor="password">Password:</label>
        <input type="password" id='password'  onChange={(e)=>SetPassord(e.target.value)}  placeholder='enter your password' />

        <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Signin
