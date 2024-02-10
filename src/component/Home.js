import React, { useRef, useState } from 'react'
import "./Home.css";
import {HiChevronDoubleLeft, HiChevronDoubleRight} from "react-icons/hi2";
import {MdHome} from "react-icons/md";
import {FaSearchengin} from "react-icons/fa6";
import {motion} from "framer-motion";
import { Link,Route, Routes} from 'react-router-dom';
import Project from './Project';
import SignUp from './SignUp';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import UserProfileDetails from './UserProfileDetails';
import StartCoding from './StartCoding';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { Setsearch } from '../context/actions/serachAction';



function Home() {
    const [sidemenu,setsidemenu]=useState(true);
    // const [user,setuser]=useState();

    const user=useSelector((state)=> state.user?.user);
    const search =useSelector((state)=>state.search?.search?state.search?.search : "")
    
    const dispatch=useDispatch()

    let refvis=useRef();

    function close(){
        setsidemenu(!sidemenu);
        // refvis.current.className="hide"
    }

    const errorNotification = (text) => {
        toast.error(text, {
          position: "top-center",
        });
      };
  return (
    <div className='container'>
          <ToastContainer />
    <div className={sidemenu?"left":"closee"}>
        {/* <h1 ref={refvis}>im left</h1> */}
        <motion.div whileTap={{scale:"0.9"}} className='anchor' onClick={close}>
            <HiChevronDoubleLeft  className={!sidemenu && "doublehide"}/>
            <HiChevronDoubleRight className={sidemenu && "doublehide"} />
        </motion.div>

        <div className='logo'>
            <Link to="/home">
            <svg viewBox="0 0 138 26" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" title="CodePen"><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
            </Link>

            {
                user ? <Link to="/startcoding" style={{textDecoration:"none" , color:"white"}}>
                <div className={sidemenu?"box": "hide"} >
                    <p>Start Coding</p></div>
                    
            </Link> : (<Link to="/home/signup" style={{textDecoration:"none" , color:"white"}}>
                <div className={sidemenu?"box": "hide"} >
                    <p>Start Coding</p></div>
                    {alert("Login First ")}
            </Link>)
            }

            {/* <Link to={"/split"}>
            <p>navbar</p>
            </Link> */}

        {/* ....homecont */}

        {user && (
           <Link to="/home/projects"  style={{textDecoration:"none" , color:"white",display:"flex",margin:"20px" ,alignItems:"center" ,gap:"10px"}} className={!sidemenu && "hide"}> 
           <MdHome/>Home
           </Link>
        )}
        </div>
    </div>
    <div className='right'>
        <div style={{display:"flex", alignItems:"center",gap:"7px"}}>
            <FaSearchengin style={{fontSize:"x-large"}}/>
            <input id='inputserach' type='text' placeholder='Search here ...' style={{backgroundColor:"#252830",border:"none",padding:"15px",color:"white" ,width:"81%"}}
            onChange={(e)=>dispatch(Setsearch(e.target.value))}  ></input>


            
        {
            !user &&(
                <motion.div  style={{color:"white"}}>
                    <Link to="/home/signup" className='signup' >Sign Up</Link>
                    <Link to="/home/login" className='login'>Login</Link>
                </motion.div>
            )


        }
        {            user && <UserProfileDetails/>}
        


        </div>

        <div className='rightlower'>
            
    <Routes>
        <Route path="/projects/*"  element={<Project/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>


        </div>



    </div >

    </div>
  )
}

export default Home
