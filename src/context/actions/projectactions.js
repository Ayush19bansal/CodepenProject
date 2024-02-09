export const Setproject=(project)=>{
    return{
        type:"SET_PROJECT",
        project:project
    }
}

export const SetprojectNull=()=>{
    return{
        type:"SET_PROJECT_NULL"
    }
}