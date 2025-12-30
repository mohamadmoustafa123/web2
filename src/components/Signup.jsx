import { Email } from '@mui/icons-material';
//import React from 'react'
import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';
 
function Signup() {
   const [name,SetName]=useState("");
   const [email,SetEmail]=useState("");
   const [password,SetPassord]=useState("");
   const [confirmPassword,SetConfirmPassord]=useState("");
   const navigate=useNavigate();


     const handleSubmit = (e)=>{
       e.preventDefault();

     if (password !==confirmPassword){
       alert("password do not match");
       return;
     } 

console.log("Name",name);
console.log("Emamil",Email);
console.log("Password",password);

}
  return (
    <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">welcome..</h1>
           <form onSubmit={handleSubmit}>
            <div>
             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" >Name:</label>
             <input type="text"  id='name' value={name} onChange={(e)=>SetName(e.target.value)} placeholder='enter your name'  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
            </div>
            <div>
             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
             <input type="text"  id='email' value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder='enter your email' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">password:</label>
             <input type="password"  id='password' value={password} onChange={(e)=>SetPassord(e.target.value)} placeholder='enter your password' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm password:</label>
             <input type="password"  id='confirmPassword' value={confirmPassword} onChange={(e)=>SetConfirmPassord(e.target.value)} placeholder='enter your password ' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
             <button onClick={()=>navigate("/HomePage")} className="bg-gray-300 hover:bg-gray-400 text-white font-medium py-5 px-5 rounded-md transition-colors" >Submit</button>
        
         </form>
        </div>
    </div>
  )
}

export default Signup