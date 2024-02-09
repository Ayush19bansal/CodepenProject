import React, { useState } from 'react'
import "./UserProfileDetails.css"
import { useSelector } from 'react-redux'
import {motion} from "framer-motion";
import { FaChevronDown } from 'react-icons/fa6';
import { Menus, signout } from '../configu/helper';
import { Link } from 'react-router-dom';

function UserProfileDetails() {
    const user=useSelector((state)=> state.user.user)
    let[ismenu,setmenu] =useState(false);
  return (
    <div className='cont'>
      <div className='image'>
        {user.photoURL? (<img src={user.photoURL}></img>):(<p className='p'> {user.email[0].toUpperCase()}</p>)}

      </div>

      <motion.div onClick={()=>{setmenu(!ismenu)}} whileTap={{scale:.9}} style={{backgroundColor:"#252830",height:"40px",width:"40px",display:"flex",alignItems:"center",borderRadius:"7px",justifyContent:"center"}}>
        <FaChevronDown style={{}}></FaChevronDown>
      </motion.div>

     {
      ismenu && (
        <motion.div className='dropdown'>
        {Menus && Menus.map((menu=>(
         <Link className='link' style={{textDecoration:"none" ,color:'white'}} to={menu.url} key={menu.id}>
         {menu.name}
         </Link>
        )))}

        <motion.p onClick={signout} style={{fontSize:"medium",paddingLeft:"19px",cursor:"pointer" ,color:"gray"}} whileTap={{scale:0.9}}>Sign Out</motion.p>
      </motion.div>
      )
     }
    </div>
  )
}

export default UserProfileDetails
