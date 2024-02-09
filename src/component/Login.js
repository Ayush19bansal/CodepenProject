import React, { useState } from 'react';
import "./SignUp.css";
import {FaEnvelope,FaEye, FaEyeSlash,FaGithub} from "react-icons/fa6";
import {MdPassword} from "react-icons/md";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import { auth } from '../configu/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { signInwithGithub, signInwithGoggle } from '../configu/helper';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
function Login() {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState();
  const[isshow,setshow]=useState(true);

  let navigate=useNavigate()

  const notify = (text) => {

    toast.success(text, {
      position: "top-center"
    });

  }
  const errorNotification = (text) => {
    toast.error(text, {
      position: "top-center",
    });
  };

  async function loginwithemailpassword(){
    await signInWithEmailAndPassword(auth, email, password)
    .then((usercred)=>{
      if(usercred){
       notify('Logged In Successfully!');
        console.log(usercred);
      }
  }).catch(err=>{
   errorNotification("Invalid  Email or Password!");
    console.log(err);
  })
}

  return (
    <div className='containersign'>
      <img className='imgtag' src='https://blog.codepen.io/wp-content/uploads/2022/01/codepen-wordmark-display-inside-white@10x.png'></img>

      <ToastContainer />
      <p>Join with as! 🤩</p>

      <form className='register' onClick={(e)=>{e.preventDefault()}}>
        <label>Email</label>
        <br/>
       <div className='email'>
        <FaEnvelope style={{color:"gray" ,fontSize:"large",marginLeft:"7px"}}></FaEnvelope>
        <input type='email' value={email} placeholder='Email' style={{backgroundColor:"transparent",border:"none"}} onChange={(e)=>{setemail(e.target.value)}}></input>
       </div>
  

       <label>Password</label>
       <br/>

       <div className='password'>
        <MdPassword style={{color:"gray" ,fontSize:"large",marginLeft:"7px"}}></MdPassword>
        <input type={isshow?"password":"text"} value={password} onChange={(e)=>{
          setpassword(e.target.value)
        }} placeholder='Password' style={{backgroundColor:"transparent",border:"none"}}
        ></input>
       <motion.div whileTap={{scale:"0.9"}} style={{display:"flex",justifyContent:"center"}}>
        {
          isshow? 
          <FaEyeSlash  onClick={()=>{
            setshow(!isshow)
          }} style={{color:"gray" ,fontSize:"large",marginRight:"7px"}}></FaEyeSlash>:<FaEye  onClick={()=>{
            setshow(!isshow)
          }} style={{color:"gray" ,fontSize:"large",marginRight:"7px"}}></FaEye>
        }
      
       </motion.div>

       </div>

       <motion.div onClick={loginwithemailpassword} className='button' whileTap={{scale:"0.9"}}>
        <p>Login</p>

       </motion.div>

       <p style={{fontSize:"small"}}>Need an account ? <span onClick={()=>{
        navigate("/home/signup")
       }} style={{color:"#47CF73",cursor:"pointer"}}>Sign up now!</span> </p>

<div className='or' style={{display:"flex",gap:"10px"}}>
       <div className='line'></div>
       <p style={{fontSize:"small",color:"gray"}}>OR</p>
       <div className='line'></div>
       </div>

       <motion.div onClick={signInwithGoggle} className='signupoptions' whileTap={{scale:0.9}}>
        <FcGoogle style={{fontSize:"x-large"}}></FcGoogle>
        <p style={{fontSize:"small"}}>Sign In with Google</p>
       </motion.div>



       <div className='or' style={{display:"flex",gap:"10px"}}>
       <div className='line'></div>
       <p style={{fontSize:"small",color:"gray"}}>OR</p>
       <div className='line'></div>
       </div>

       <motion.div onClick={signInwithGithub} className='signupoptions' whileTap={{scale:0.9}}>
        <FaGithub style={{fontSize:"x-large"}}></FaGithub >
        <p style={{fontSize:"small"}}>Sign In with GitHub</p>
       </motion.div>
    
       
      </form>



    </div>
  )
}

export default Login;