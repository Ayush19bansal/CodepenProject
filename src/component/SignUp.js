import React, { useState } from 'react';
import "./SignUp.css";
import {FaEnvelope,FaEye, FaEyeSlash, FaGithub} from "react-icons/fa6";
import {MdPassword} from "react-icons/md";
import {FcGoogle} from "react-icons/fc";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { signInwithGithub, signInwithGoggle } from '../configu/helper';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configu/Firebase';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState();
  const[isshow,setshow]=useState(true);
  const[islogin,setlogin]=useState(false);
  // const[emailvalidation,setemailvalidation]=useState(false);

  let navigate=useNavigate();

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

 async function createnewuser(){
  await createUserWithEmailAndPassword(auth,email,password).then(usercred=>{
    if (usercred){
     notify("Account Created Successfully!");
      console.log(usercred);
    }
  }).catch(err=>{
    errorNotification("Enter valid Email or Passsword");
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
          }} style={{color:"gray" ,fontSize:"large",marginRight:"7px"}}></FaEyeSlash>:
          <FaEye  onClick={()=>{
            setshow(!isshow)
          }} style={{color:"gray" ,fontSize:"large",marginRight:"7px"}}></FaEye>
        }
      
       </motion.div>

       </div>

       <motion.div  onClick={createnewuser} className='button' whileTap={{scale:"0.9"}}>
        <p>Sign Up</p>

       </motion.div>

       <p style={{fontSize:"small"}}>Already have account ?  <span onClick={()=>{
        navigate("/home/login")
       }} style={{color:"#47CF73",cursor:"pointer"}}>Login Now!</span></p>

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

export default SignUp;
