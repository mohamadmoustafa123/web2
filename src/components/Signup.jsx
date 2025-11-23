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
            <h1></h1>
        </div>
    </div>
  )
}

export default Signup