import React from 'react'
import "./Projectcard.css"
import { useSelector } from 'react-redux';

function ProjectCard({project,index}) {
    const user=useSelector((state)=> state.user.user)
    const projects=useSelector((state)=>state.project.project);
  return (
    <div className='projectcardcontainer'>
     <div>
     <iframe className='iframeproj'
                    srcDoc={project.Result}
                    title="output"
                    sandbox="allow-scripts"
                >
                </iframe>
     </div>

     <div className='imgandall'>
    
        {project?.user?.photoURL? (<img src={project?.user?.photoURL}></img>):(<p className='p'>a</p>)}

    
     </div>
     
    </div>
  )
}

export default ProjectCard
