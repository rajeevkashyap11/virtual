import React, { useState } from 'react';
import Navbar from './Navbar';
import '../assets/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from './utils/useForm';
import axios from 'axios';


export default function Signup() {
  //create custom hook

  const { onChange, onSubmit, values } = useForm(loginUser, {
    name: '',
    email:'',
    password:'',
    cPassword:''
 });

 async function loginUser(){
 
  if(values.name=='')
  {
    toast.error('Please enter name');
    return;
  }
  if(values.email=='')
  {
    toast.error('Please enter Email');
    return;
  }
  
  if(values.password=='')
  {
    toast.error('Please enter password');
    return;
  }
  if(values.cPassword=='')
  {
    toast.error('Please enter confirm password');
    return;
  }
else{
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(values.name,values.email,values.password);
  const res = await axios.post('http://localhost:4000/user/signup', body, config);
      

}  
  
 }

  return (
    <div>
   <Navbar/>     
   <ToastContainer />
<div class="container">
 <div class="row">
     <div class="col-lg-4"></div>
     
  <div class="col-lg-7 card card1" >      
<form onSubmit={onSubmit}>
<div class="form-group">
  <label>Registration</label>
  </div>
  <div class="form-group">
  <input type="text" class="form-control" name="name" id="exampleInputEmail1" onChange={onChange}  aria-describedby="emailHelp" placeholder="Enter name"/>    
  </div>
  
  <div class="form-group">
  <input type="email" class="form-control" name="email" id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>    
  </div>
  
  <div class="form-group">  
    <input type="password" class="form-control" name="password" id="exampleInputPassword1" onChange={onChange} placeholder="Enter Password"/>
  </div>
  
  <div class="form-group">  
  <input type="password" class="form-control" name="cPassword" id="exampleInputPassword1" onChange={onChange} placeholder="Enter confirm password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>

</div>


</div>
  );
}