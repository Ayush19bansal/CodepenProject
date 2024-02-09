import React from 'react'
import "./Projectcard.css"
import { useSelector } from 'react-redux';
import {MdBookmark} from "react-icons/md"

function ProjectCard({project,index}) {
    const user=useSelector((state)=> state.user?.user)
  return (
    <div className='projectcardcontainer'>
     <div className='iframeproj'>
     <iframe className='iframewidth'
                    srcDoc={project.Result}
                    title="output"
                    sandbox="allow-scripts"
                   
                    height="100%"
                >
                </iframe>
     </div>

     <div className='imgandall'>
    
        <div className='first'>
        {project?.photo? (<img src={project?.photo} style={{height:"50%"}}></img>):(<p className='pp' style={{height:"50%"}}> {project.email[0].toUpperCase()}</p>)}
        </div>

       <div className='second'>
       <div className='titlename'>{project?.title}</div>
       <div className='small'>{project?.creator? (project.creator):(project.email.split('@')[0])}</div>
       
       </div>

       <motiondiv className='bookmark'><MdBookmark/></motiondiv>

    
     </div>
     
    </div>
  )
}

export default ProjectCard
