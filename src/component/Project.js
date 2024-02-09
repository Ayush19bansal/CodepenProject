import React from 'react'
import ProjectCard from "./ProjectCard"
import { useSelector } from 'react-redux'

function Project() {
  
  const project=useSelector((state)=>state.project?.project);
 

  return (
    <div className="projectcontainer">
    {
      project && project.map((project,index)=>(
        <ProjectCard key={project.id} project={project} index={index}/>
      ))
    }
    
    </div>
  )
}

export default Project
