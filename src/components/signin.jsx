import React, { useState } from 'react'

function Signin() {
    const [name,SetName]=useState("");
    const [email,SetEmail]=useState("");
    const [password,SetPassord]=useState("");
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
       console.log("Name:",name);
        console.log("Email:",email);
       console.log("Password:",password);
       
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">      
        <h1 className="text-2xl font-bold mb-6 text-center">welcome</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label htmlFor="name" className='block text-gray-700 mb-1'>Name:</label>
           <input type="text"  id='name' value={name} onChange={(e)=>SetName(e.target.value)} placeholder='enter your name'className='w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-400' />
         </div>
         <div> 
           <label htmlFor="name" className='block text-gray-700 mb-1'>Name:</label>
           <label htmlFor="email" >Email:</label>
           <input type="email" id='email'  value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder='enter your Email'className='w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-400' />
         
         </div> 
         <div>
           <label htmlFor="password" className='block text-gray-700 mb-1'>Password:</label>
           <input type="password" id='password'  value={password} onChange={(e)=>SetPassord(e.target.value)}  placeholder='enter your password' className='w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-400' />
          
          </div>
        <button type='submit' className='w-full bg-gray-500 text-white py-2 rounded-lg  hover:bg-blue-600 transition-colors'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Signin
 



     
        