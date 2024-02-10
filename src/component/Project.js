import React, { useEffect, useState } from 'react'
import ProjectCard from "./ProjectCard"
import { useSelector } from 'react-redux'

function Project() {
  
  const project=useSelector((state)=>state.project?.project);
  const search =useSelector((state)=>state.search?.search?state.search?.search : "")
  const[filter,setfilter]=useState(null)

  useEffect(()=>{
    if(search?.length>0){
   
      setfilter(   project?.filter((item)=>{
        const lowercaseitem =item?.title.toLowerCase()
        return search.split("").every((letter)=>lowercaseitem.includes(letter))
      }))
       
    }
    else{
      setfilter(null)
    }
  },[search])

  return (
    <div className="projectcontainer">
    {
     filter?( filter && filter.map((project,index)=>(
      <ProjectCard key={project.id} project={project} index={index}/>
    ))): project && project.map((project,index)=>(
      <ProjectCard key={project.id} project={project} index={index}/>
    ))
    }
    
    </div>
  )
}

export default Project
