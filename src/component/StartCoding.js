import { Splitter, SplitterPanel } from "primereact/splitter";

import React, { useCallback, useEffect, useState } from "react";
import "./Startcoding.css";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { abcdef, abcdefInit } from "@uiw/codemirror-theme-abcdef";
import Result from "./Result";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import UserProfileDetails from "./UserProfileDetails";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../configu/Firebase";
import { useSelector } from "react-redux";
import {MdCheck,MdEdit} from "react-icons/md"
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

function StartCoding() {
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");
  const [output, setoutput] = useState(" ");
  const [title, settile] = useState("");
  const [istitle, setistitle] = useState("Untitled");


   const user = useSelector((state)=> state.user.user);

  useEffect(() => {
    updateOutput();
  }, [html_edit, css_edit, js_edit]);

  //* Html onchange handler
  const onChangeHtml = useCallback((value) => {
    console.log(value);
    setHtml_Edit(value);
  }, []);

  //* Css onchange handler
  const onChangeCss = useCallback((value) => {
    console.log(value);
    setCss_Edit(value);
  }, []);

  //* JavaScript onchange handler
  const onChangeJavaScript = useCallback((value) => {
    console.log(value);
    setJs_Edit(value);
  }, []);

  //final result

  function updateOutput() {
    const combineoutput = `
    <html>
       <head>
         <style>${css_edit}
         </style>
       </head>
       <body>
          ${html_edit}
           <script>${js_edit}</script>
       </body>
    </html>
    `;
    setoutput(combineoutput);
  }

  const errorNotification = (text) => {
    toast.error(text, {
      position: "top-center",
    });
  };

  const notify = (text) => {

    toast.success(text, {
      position: "top-center"
    });

  }

  async function savedata(){
    const id=`${Date.now()}`
    const  data={id:id, html:html_edit, css:css_edit, js:js_edit,Result:output,photo:user.photoURL,email: user.email,title:istitle , creator: user.displayName};
     await setDoc(doc(db,"Project",id),data).then(()=>{
     notify("Data Saved")
     }).catch((err)=>{
      errorNotification(err.message)
     })
  }

  return (
    <div className="newprojectcontainer">
  <ToastContainer />
<header className="newprojectHeadercontainer">
            <div className="newprojectheader">
                <div className="newprojectlogo">
                <Link to="/home"><svg viewBox="0 0 138 26" className="logoimg" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" title="CodePen" ><path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6" ></path></svg></Link>
                </div>
                <div className="newprojecttitlecontainer">
                    <div className="newprojecttitle">
                       {
                        title? <>
                        <input type="text" placeholder="Enter Title.." value={istitle} onChange={(e)=> setistitle(e.target.value)} />
                        </> : <>
                        <p>{istitle}</p>
                        </>
                       }
                       {
                        title? <>
                        <div onClick={()=> settile(false)}>
                            <MdCheck style={{color: "#10B981"}}/>
                        </div>
                        </> : <>
                        <div onClick={()=> settile(true)}>
                            <MdEdit />
                        </div>
                        </>
                       }
                    </div>
                    <div style={{display:"flex", justifyContent:"center", alignItems: "center", fontSize:"12px", marginTop:"6px"}}>
                       <p>
                       {
                            user.displayName ? user.displayName : `${user.email.split('@')[0]}`
                        }
                       </p>
                       <p style={{fontSize: "10px",marginTop:"3px",marginLeft:"6px" , padding:"2px"}} className="followbtn">
                        Follow+
                       </p>
                    </div>

                </div>
            </div>

            {
                user &&
               (<div className="newprojectsave">
                  <motion.div className="save" whileTap={{scale:0.9}} onClick={savedata}>Save</motion.div>
                  <UserProfileDetails />
               </div>
               )
            }

        </header>



      <div className="codeeditor">
        <Splitter style={{ height: "100%" }} layout="vertical">
          <SplitterPanel
            className="htmlcssjs"
            
          >
            <Splitter className="one">
              <SplitterPanel className="html codemirror" size={75}
               style={{ borderRight: "4px solid  #386f9b" }}  >
                <div className="htmlcontainer">
                  <div className="htmliconbox">
                    <div className="htmlicon">
                      <FaHtml5 style={{ color: "#F75421" }} />
                      <p>HTML</p>
                    </div>
                    <div className="settingicon">
                      <FcSettings />
                      <FaChevronDown style={{ color: "#C0D5E0" }} />
                    </div>
                  </div>

                  {/* //codepen  */}

                  <CodeMirror
                    id="editors1"
                    value={html_edit}
                    height="100%"
                    theme={abcdef}
                    extensions={[html({ html: true })]}
                    onChange={(value, viewUpdate) => {
                      console.log("value:", value);
                      setHtml_Edit(value);
                    }}
                  />
                </div>
              </SplitterPanel>
              <SplitterPanel
                className="css codemirror"
                style={{ borderRight: "4px solid  #386f9b" }}
                size={75}
               
              >
                <div className="htmlcontainer">
                  <div className="htmliconbox">
                    <div className="htmlicon">
                      <FaCss3 style={{ color: "skyblue" }} />
                      <p>CSS</p>
                    </div>
                    <div className="settingicon">
                      <FcSettings />
                      <FaChevronDown style={{ color: "#C0D5E0" }} />
                    </div>
                  </div>

                  <CodeMirror
                    id="editors2"
                    value={css_edit}
                    height="100%"
                    theme={abcdef}
                    extensions={[css({ css: true })]}
                    onChange={(value, viewUpdate) => {
                      console.log("value:", value);
                      setCss_Edit(value);
                    }}
                  />
                </div>
              </SplitterPanel>
              <SplitterPanel
                className="js codemirror"
                
                size={75}
              >
                <div className="htmlcontainer">
                  <div className="htmliconbox">
                    <div className="htmlicon">
                      <FaJs style={{ color: "yellow" }} />
                      <p>JS</p>
                    </div>
                    <div className="settingicon">
                      <FcSettings />
                      <FaChevronDown style={{ color: "#C0D5E0" }} />
                    </div>
                  </div>

                  <CodeMirror
                    id="editors3"
                    value={js_edit}
                    height="100%"
                    theme={abcdef}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      console.log("value:", value);
                      setJs_Edit(value);
                    }}
                  />
                </div>
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
          <SplitterPanel 
            className="flex align-items-center justify-content-center"
           
          >
            <Result srcCode={output} />
          </SplitterPanel>
        </Splitter>
      </div>
    </div>
  );
}

export default StartCoding;
