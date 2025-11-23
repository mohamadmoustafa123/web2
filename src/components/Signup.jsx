import { Email } from '@mui/icons-material';
import React from 'react'
 
function Signup() {
   const [name,SetName]=useState("");
   const [email,SetEmail]=useState("");
   const [password,SetPassord]=useState("");
   const [confirmPassword,SetConfirmPassord]=useState("");



     const handleSubmit = (e)=>{
       e.preventDefault();

     if (password !==confirmPassword){
       alert("password do not match");
       return;
     } 

console.log("Name",name);
console.log("Emamil",Email);
console.log("password",password);

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
         </form>
        </div>
    </div>
  )
}

export default Signup