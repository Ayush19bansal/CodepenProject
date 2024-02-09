import './App.css';
import {Navigate,useNavigate,Routes,Route} from "react-router-dom"
import Home from './component/Home';
import StartCoding from './component/StartCoding';
import { auth, db } from './configu/Firebase';
import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import {useDispatch} from "react-redux"
import { SetUser } from './context/actions/useraction';
import {Vortex} from "react-loader-spinner"
import Navbar from './component/Navbar';
import Split from './component/Splitprac';
import Splitprac from './component/Splitprac';
import { Setproject } from './context/actions/projectactions';


function App() {

  const[isloading,setloading]=useState(true)
  const dispatch=useDispatch();
  let navi=useNavigate();

// useeffect for userdata
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userCred)=>{
      if(userCred){
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(()=>{ 
          // dispatch using Redux
          dispatch(SetUser(userCred.providerData[0]));
           navi("/home/projects" , {replace:true});
        });
      }else{
        navi('/home/signup', { replace : true});
      }
      setInterval(()=>{
        setloading(false);
      },2000)
    });
    return () => unsubscribe();
  },[])


  // useeffect for projectdata

  useEffect(()=>{
    const projectquery=query(collection(db,"Project"),orderBy("id","desc"));
    const unsubscribe =onSnapshot(projectquery,(snap)=>{
      const projectlist=snap.docs.map(doc=>doc.data());
      dispatch(Setproject(projectlist))
    })
  return unsubscribe;
  },[])
  
  return (
    <>
     {isloading?  <div className="loader"><Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  /></div> : <Routes>
        {/* <Route path='/split' element={<Splitprac/>}/> */}
        <Route path="/home/*"  element={<Home/>} />
        <Route path="/startcoding" element={<StartCoding/>} />
        <Route path="/*" element={<Navigate to={"/home"}/>} />
    </Routes>}
 
    </>
  );
}

export default App;
