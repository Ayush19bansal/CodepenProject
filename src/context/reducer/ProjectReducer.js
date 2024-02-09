import React from 'react'

function ProjectReducer(state=null ,action) {
  
    switch(action.type){
        case "SET_PROJECT":
            return{
                ...state,
                project:action.project
            }
        case "SET_PROJECT_NULL":
            return{
                ...state,
                project:null
            }
        default:
            return state;
    }
}

export default ProjectReducer
