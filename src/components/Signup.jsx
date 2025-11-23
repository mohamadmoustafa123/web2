import { Email } from '@mui/icons-material';
//import React from 'react'
import React, {useState} from 'react';
import HomePage from './HomePage';
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
    <div>
        <div>
          <h1>welcome..</h1>
           <form onSubmit={handleSubmit}>
            <div>
             <label htmlFor="name" className='block text-gray-700 mb-1'>Name:</label>
             <input type="text"  id='name' value={name} onChange={(e)=>SetName(e.target.value)} placeholder='enter your name'className='w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-400' />
            </div>
            <div>
             <label htmlFor="email" className='block text-gray-700 mb-1'>Email:</label>
             <input type="text"  id='email' value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder='enter your name'className='w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-400' />
            </div>
            <div>
             <label htmlFor="password" className='block text-gray-700 mb-1'>password:</label>
             <input type="password"  id='password' value={name} onChange={(e)=>SetPassord(e.target.value)} placeholder='enter your name'className='w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-400' />
            </div>
            <div>
             <label htmlFor="confirmPassword" className='block text-gray-700 mb-1'>Confirm password:</label>
             <input type="text"  id='confirmPassword' value={confirmPassword} onChange={(e)=>SetConfirmPassord(e.target.value)} placeholder='enter your name'className='w-full px-4 py-2 border-gray-300 rounded-lg focus:ring-blue-400' />
            </div>
             <button onClick={()=>navigate("/")}  className='text-gray-600' hover:underline  >Sign in</button>
        
         </form>
        </div>
    </div>
  )
}

export default Signup