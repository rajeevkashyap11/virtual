import React, { useState } from 'react';
import Navbar from './Navbar';
import '../assets/style.css'

import { useForm } from './utils/useForm';

export default function Login() {
  
    const { onChange, onSubmit, values } = useForm(loginUser, {
        phone_number: '',
        password:''
     });
    
    function loginUser(){
    
     }

  return (
    <div>
   <Navbar/>     
<div class="container">
 <div class="row">
     <div class="col-lg-4"></div>
     
  <div class="col-lg-7 card card1" >      
<form>
<div class="form-group">
  <label>Login</label>
  </div>
  
  <div class="form-group">
  <input type="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Enter email"/>    
  </div>
  
  <div class="form-group">  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Login</button>
</form>
</div>
</div>

</div>


</div>
  );
}