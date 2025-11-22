import React from 'react'

function signin() {
  return (
    <div>
       <div>        
        <h1>welcome</h1>
        <form>
        <label htmlFor="name" >Name</label>
        <input type="text"  id='name' value={name} placeholder='enter your name' />

         <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='enter your name' />

         <label htmlFor="password">Password</label>
        <input type="email" id='password' placeholder='enter your name' />

        

        </form>
        </div>
    </div>
  )
}

export default signin
